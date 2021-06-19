<template>
  <div class="main-content">
    <!-- <b-container> -->
    <b-row>
      <!-- <NewBlog
        v-for="post in posts"
        :key="post.id"
        :idnew="post.id"
        :titlenew="post.title"
        :excerptnew="post.previewText"
        :thumbnailnew="post.thumbnailUrl"
      /> -->
      <b-col cols="12">
        <b-row v-for="posting in posts" :key="posting.id" class="mt-3 mb-3">
          <b-col cols="4" class="img-new">
            <img :src="posting.thumbnailUrl" />
          </b-col>
          <b-col cols="8">
            <h6>{{ posting.title }}</h6>
            <p>{{ posting.publish }}</p>
            <div class="read-more">
              <nuxt-link :to="'/blog/' + posting.id"> Read More </nuxt-link>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- </b-container> -->
  </div>
</template>

<script>
// import NewBlog from '../blog/_postId/index'
export default {
  components: {
    // NewBlog
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
              publish: bp.content.published_at
            }
          })
        }
      })
  },
  data() {
    return {
      newData: []
    }
  }
}
</script>

<style scoped>
.img-new img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
