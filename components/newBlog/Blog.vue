<template>
  <div>
    <h1>Halo</h1>
  </div>
</template>

<script>
export default {
  // return context.app.$storyapi
  //     .get('cdn/stories', {
  //       version: context.isDev ? 'draft' : 'published',
  //       starts_with: 'blog/'
  //     })
  //     .then((res) => {
  // console.log(res)
  // asyncfetch(context) {
  //   return context.app.$storyapi
  //     .get('cdn/stories', {
  //       version: context.isDev ? 'draft' : 'published',
  //       starts_with: 'blog/'
  //     })
  //     .then((res) => {
  //       console.log(res)
  //     })
  // },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: context.isDev ? 'draft' : 'published',
        starts_with: 'blog/'
      })
      .then((res) => {
        console.log(res)
        //   return {
        //     posts: res.data.stories.map((bp) => {
        //       return {
        //         id: bp.slug,
        //         title: bp.content.title,
        //         previewText: bp.content.sumary,
        //         thumbnailUrl: bp.content.thumbnail
        //       }
        //     })
        //   }
      })
  },
  data() {
    return {
      mountains: []
    }
  },
  created() {
    console.log(this.mountains)
  }
  // asyncData(context) {
  //   return context.app.$storyapi
  //     .get('cdn/stories', {
  //       version: context.isDev ? 'draft' : 'published',
  //       starts_with: 'blog/'
  //     })
  //     .then((res) => {
  //       console.log(res)
  //       return {
  //         posts: res.data.stories.map((bp) => {
  //           return {
  //             id: bp.slug,
  //             title: bp.content.title,
  //             previewText: bp.content.sumary,
  //             thumbnailUrl: bp.content.thumbnail,
  //             publish: bp.content.published_at
  //           }
  //         })
  //       }
  //     })
  // },
}
</script>
