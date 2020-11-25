<template>
  <div class="main-content">
    <b-container fluid>
      <b-row>
        <PostPreview
          v-for="post in posts"
          :id="post.id"
          :key="post.id"
          :title="post.title"
          :excerpt="post.previewText"
          :thumbnail="post.thumbnailUrl"
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
        return {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.sumary,
              thumbnailUrl: bp.content.thumbnail
            }
          })
        }
      })
  }
  // data() {
  //   return {
  //     posts: [
  //       {
  //         title: 'Coding is Awesome Part 1',
  //         previewText:
  //           'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, exercitationem!',
  //         thumbnailUrl:
  //           'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  //         id: 'coding-is-awesome-part-1'
  //       },
  //       {
  //         title: 'Coding is Awesome Part 2',
  //         previewText:
  //           'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, exercitationem!',
  //         thumbnailUrl:
  //           'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  //         id: 'coding-is-awesome-part-2'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style scoped>
.main-content {
  background: #000;
  padding-bottom: 175px;
}
</style>
