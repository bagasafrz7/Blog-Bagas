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
          <h6>Tags :</h6>
          <div class="tags">
            <div v-for="item in tags" :key="item">
              <b-badge variant="warning" class="detail-tags">{{
                item
              }}</b-badge>
            </div>
          </div>
          <!-- <h6>Share :</h6> -->
          <!-- <div class="share">
            <ShareNetwork
              v-for="network in networks"
              :key="network.network"
              :network="network.network"
              :style="{ backgroundColor: network.color }"
              :url="sharing.url"
              :title="title"
              :description="sharing.description"
              :quote="sharing.quote"
              :hashtags="sharing.hashtags"
              :twitter-user="sharing.twitterUser"
            >
              <span>{{ network.name }}</span>
            </ShareNetwork>
          </div> -->
          <div class="comments">
            <Disqus />
          </div>
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
        console.log(res)
        return {
          blok: res.data.story.content,
          image: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          slug: res.data.story.content.slug,
          content: res.data.story.content.content,
          published: res.data.story.published_at,
          tags: res.data.story.tag_list
        }
      })
  },
  data() {
    return {
      publis: this.published,
      sharing: {
        url: 'https://news.vuejs.org/issues/180',
        title:
          'Say hi to Vite! A brand new, extremely fast development setup for Vue.',
        description:
          'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
        quote: "The hot reload is so fast it's near instant. - Evan You",
        hashtags: 'vuejs,vite,javascript',
        twitterUser: 'youyuxi'
      },
      networks: [
        {
          network: 'facebook',
          name: 'Facebook',
          icon: 'fab fah fa-lg fa-facebook-f',
          color: '#1877f2'
        },
        {
          network: 'line',
          name: 'Line',
          icon: 'fab fah fa-lg fa-line',
          color: '#00c300'
        },
        {
          network: 'linkedin',
          name: 'LinkedIn',
          icon: 'fab fah fa-lg fa-linkedin',
          color: '#007bb5'
        },
        {
          network: 'telegram',
          name: 'Telegram',
          icon: 'fab fah fa-lg fa-telegram-plane',
          color: '#0088cc'
        },
        {
          network: 'twitter',
          name: 'Twitter',
          icon: 'fab fah fa-lg fa-twitter',
          color: '#1da1f2'
        },
        {
          network: 'whatsapp',
          name: 'Whatsapp',
          icon: 'fab fah fa-lg fa-whatsapp',
          color: '#25d366'
        }
      ]
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
  background: var(--bg);
}

h1,
p {
  color: var(--color);
}

p.author a {
  color: #f7b633;
}

.post-thumbnail {
  padding: 50px 0 20px 0;
}
.post-thumbnail img {
  width: 100%;
  height: 500px;
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
.tags {
  display: flex;
  flex-direction: row;
  width: 100px;
}
.tags .badge {
  padding: 5px 10px;
  margin: 5px;
}
</style>
