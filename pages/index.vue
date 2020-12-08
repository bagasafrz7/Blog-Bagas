<template>
  <div class="main-content">
    <b-container fluid>
      <b-row>
        <!-- <PostPreview
          v-for="post in posts"
          :id="post.id"
          :key="post.id"
          :title="post.title"
          :excerpt="post.previewText"
          :thumbnail="post.thumbnailUrl"
        /> -->
        <b-col class="hero-img text-center" cols="12">
          <img src="~assets/img/pp_ig_hd.png" alt="Image People" />
          <h5>Halo, saya Bagas Afrizal</h5>
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            tempora ea autem quae similique amet incidunt laudantium, sint
            officiis asperiores consequatur neque molestias soluta odit.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import PostPreview from '../components/Blog/postPreview'
export default {
  components: {
    // PostPreview
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
              thumbnailUrl: bp.content.thumbnail
            }
          })
        }
      })
  }
}
</script>

<style scoped>
.main-content {
  background: #000;
  padding-bottom: 175px;
}

.hero-img img {
  width: 15%;
  margin: 25px 0;
}

.hero-img h5 {
  font-size: 28px;
  color: #fff;
}

.hero-img h1 {
  width: 50%;
  margin: 25px auto;
  font-size: 62px;
  color: #fff;
}

.hero-img p {
  width: 50%;
  margin: 25px auto 0;
  color: rgb(143, 143, 143);
  font-size: 22px;
  font-weight: 100 !important;
}
</style>
