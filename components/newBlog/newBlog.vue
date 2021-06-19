<template>
  <b-col>
    <div class="post-preview-thumbnail">
      <img :src="thumbnailnew" />
      <div class="detail-title">
        <h1>{{ titlenew }}</h1>
        <p>{{ excerptnew }}</p>
        <div class="read-more">
          <nuxt-link :to="'/blog/' + idnew"> Read More </nuxt-link>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
    titlenew: {
      type: String,
      required: true
    },
    excerptnew: {
      type: String,
      required: true
    },
    thumbnailnew: {
      type: String,
      required: true
    },
    idnew: {
      type: String,
      required: true
    }
  }
  // data() {
  //   return {
  //     dataBlog: []
  //   }
  // },
  // created() {
  //   console.log(this.posts)
  //   console.log(this.dataBlog)
  // }
}
</script>
