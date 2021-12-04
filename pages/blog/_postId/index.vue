<template>
  <div id="post">
    <b-container>
      <b-row>
        <b-col cols="12" class="detail-post">
          <div class="post-thum">
            <img :src="image" alt="" />
          </div>
          <div class="post-thumbnail">
            <div>
              <h1 class="mt-4">
                {{ title }}
              </h1>
              <p class="author">
                {{ $moment(published).format('LL') }}
                <span style="color: #000">By</span>
                <span
                  ><u>
                    <nuxt-link to="/about">Bagas Afrizal</nuxt-link>
                  </u></span
                >
              </p>
              <hr />
            </div>
          </div>
          <!-- <div v-html="content"></div> -->
          <div class="content-blog" v-html="$md.render(content)"></div>
          <!-- <p
            style="
              white-space: pre-wrap;
              word-wrap: break-word;
              font-family: inherit;
              font-family: 'Poppins', sans-serif;
            "
          >
            {{ content }}
          </p> -->
          <section class="section-tags">
            <h6>Tags :</h6>
            <div class="tags">
              <div v-for="item in tags" :key="item">
                <b-badge variant="warning" class="detail-tags">
                  {{ item }}
                </b-badge>
              </div>
            </div>
          </section>
          <section class="share-blog">
            <h6>Share :</h6>
            <div class="share">
              <ShareNetwork
                v-for="network in networks"
                :key="network.network"
                :network="network.network"
                :style="{ color: network.color }"
                :url="sharing.url"
                :title="title"
                :description="sharing.description"
                :quote="sharing.quote"
                :hashtags="sharing.hashtags"
                :twitter-user="sharing.twitterUser"
              >
                <fa
                  :icon="['fab', network.icon]"
                  class="twitter"
                  style="font-size: 28px; margin: 5px"
                />
              </ShareNetwork>
            </div>
          </section>
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
        // console.log(res.data.story)
        return {
          blok: res.data.story.content,
          image: res.data.story.content.thumbail_detail,
          title: res.data.story.content.title,
          slug: res.data.story.content.slug,
          content: res.data.story.content.content,
          published: res.data.story.published_at,
          tags: res.data.story.tag_list
        }
      })
  },
  data() {
    // const Url = this.linkENV + this.currentLink
    // const newURL = Url.toString()
    return {
      publis: this.published,
      currentLink: this.$route.fullPath,
      linkENV: 'https://bagasafrizal.com',
      sharing: {
        url: `https://bagasafrizal.com${this.$route.fullPath}`,
        title: `${this.title}`
      },
      networks: [
        {
          network: 'facebook',
          name: 'Facebook',
          icon: 'facebook',
          color: '#1877f2'
        },
        {
          network: 'line',
          name: 'Line',
          icon: 'line',
          color: '#00c300'
        },
        {
          network: 'linkedin',
          name: 'LinkedIn',
          icon: 'linkedin',
          color: '#007bb5'
        },
        {
          network: 'telegram',
          name: 'Telegram',
          icon: 'telegram-plane',
          color: '#0088cc'
        },
        {
          network: 'twitter',
          name: 'Twitter',
          icon: 'twitter',
          color: '#1da1f2'
        },
        {
          network: 'whatsapp',
          name: 'Whatsapp',
          icon: 'whatsapp',
          color: '#25d366'
        }
      ]
    }
  },
  mounted() {
    // console.log(this.$route.fullPath)
    // console.log(this.linkENV + this.currentLink)
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  },
  methods: {},
  head() {
    return {
      title: this.title + ' | Bagas Afrizal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.title
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.title + '| Bagas Afrizal'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

@font-face {
  font-family: 'CheltenhamStdBold';
  src: url('@/assets/font/CheltenhamStdBold.otf') format('otf');
}

#post {
  background: var(--bg);
}

h1,
p {
  color: var(--color);
}

h1 {
  font-size: 46px;
  /* font-family: 'Poppins', sans-serif; */
  font-family: 'CheltenhamStdBold';
  font-weight: bold;
  margin: 15px 0 0 0;
}

h6 {
  font-family: 'Poppins', sans-serif;
}

p.author {
  color: grey;
}

p.author a {
  color: #f7b633;
}

.content-blog {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
  font-family: 'Poppins', sans-serif;
  width: 75%;
  margin: 0 auto;
}

.comments {
  width: 75%;
  margin: 0 auto;
}

.post-thumbnail {
  padding: 0 0 20px 0;
  width: 75%;
  margin: 0 auto;
}
.post-thum img {
  width: 75%;
  margin: 0 auto;
  height: 500px;
  object-fit: cover;
}
.detail-post .post-thumbnail p {
  font-family: 'Poppins', sans-serif;
}
.detail-post p {
  text-align: justify;
  font-family: 'Poppins', sans-serif;
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
.share-blog {
  width: 75%;
  margin: auto;
}
.section-tags {
  width: 75%;
  margin: auto;
}
.tags .badge {
  padding: 5px 10px;
  margin: 5px;
}

@media screen and (max-width: 576px) {
  .content-blog {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: inherit;
    font-family: 'Poppins', sans-serif;
    width: 90%;
    margin: 0 auto;
  }
  .comments {
    width: 90%;
    margin: 0 auto;
  }
  .section-tags {
    width: 90%;
    margin: 0 auto;
  }
  .share-blog {
    width: 90%;
    margin: 0 auto;
  }
  .post-thum img {
    width: 90%;
    margin: 0 auto;
    height: 500px;
    object-fit: cover;
  }
  .post-thumbnail {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
