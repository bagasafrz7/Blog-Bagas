<template>
  <div class="main-content">
    <b-container>
      <b-row>
        <PostPreview
          v-for="post in posts"
          :id="post.id"
          :key="post.id"
          :title="post.title"
          :excerpt="post.previewText"
          :thumbnail="post.thumbnailUrl"
          :publishedat="post.publishedAt"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PostPreview from '../../components/Blog/postPreview'
export default {
  components: {
    PostPreview
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: context.isDev ? 'draft' : 'published',
        starts_with: 'blog/'
      })
      .then((res) => {
        console.log(res)
        return {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.sumary,
              thumbnailUrl: bp.content.thumbnail,
              publishedAt: bp.published_at
            }
          })
        }
      })
  }
}
</script>

<style scoped>
.main-content {
  background: var(--bg);
}

@media screen and (max-width: 576px) {
  .main-content {
    padding: 0 25px;
  }
}
</style>
