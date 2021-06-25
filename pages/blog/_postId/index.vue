<template>
  <div id="post">
    <b-container>
      <b-row>
        <b-col cols="12" class="detail-post">
          <div class="post-thumbnail">
            <img :src="image" alt="" />
            <h1 class="mt-4">{{ title }}</h1>
            <p class="author">
              {{ $moment(published).format('LL') }}. By
              <span
                ><u>
                  <nuxt-link to="/about">Bagas Afrizal</nuxt-link>
                </u></span
              >
            </p>
            <hr />
          </div>
          <p>{{ content }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {},
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/blog/' + context.params.postId, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then((res) => {
        return {
          blok: res.data.story.content,
          image: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          content: res.data.story.content.content,
          published: res.data.story.published_at
        }
      })
  },
  data() {
    return {
      publis: this.published
    }
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  }
}
</script>

<style scoped>
#post {
  background: #121212;
}

h1,
p {
  color: #fff;
}

p.author a {
  color: #f7b633;
}

.post-thumbnail {
  padding: 50px 0 20px 0;
}
.post-thumbnail img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.detail-post .post-thumbnail p {
  font-family: 'Josefin Sans', sans-serif;
}
.detail-post p {
  font-family: 'Barlow', sans-serif;
  text-align: justify;
}
.side-content {
  padding: 50px 0;
}
.side-content .line-bt {
  border-top: 3px solid #fff;
  width: 50px;
}

hr {
  background: #fff;
}
</style>
