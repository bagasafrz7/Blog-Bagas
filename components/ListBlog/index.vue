<template>
  <b-col sm="12" md="6" lg="6" xl="4" class="mt-4 text-center">
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <div class="isloading">
          <b-skeleton-img height="550px" />
          <b-skeleton class="mt-2"></b-skeleton>
        </div>
      </template>

      <div
        v-if="showEng"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
        class="post-preview-thumbnail"
      >
        <div class="detail-title">
          <h1>{{ title }}</h1>
        </div>
        <div class="read-more">
          <nuxt-link :to="'/blog/' + id"> {{ $t('btn_readmore') }} </nuxt-link>
        </div>
      </div>
      <div
        v-if="showIdn"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
        class="post-preview-thumbnail"
      >
        <div class="detail-title">
          <h1>{{ title }}</h1>
        </div>
        <div class="read-more">
          <nuxt-link :to="'/id/blog/' + id">
            {{ $t('btn_readmore') }}
          </nuxt-link>
        </div>
      </div>
      <div v-if="showEng" class="row">
        <div class="col-md-12">
          <div class="detail-link-blog">
            <div>
              <p class="mt-2 mb-2 author">
                {{ $moment(publishedat).locale('id').format('L') }} by
                <span
                  ><u>
                    <nuxt-link to="/about">Bagas Afrizal</nuxt-link>
                  </u></span
                >
              </p>
            </div>
            <div>
              <p class="mt-2 mb-2 min-read">{{ readingTime }} min read</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showIdn" class="row">
        <div class="col-md-12">
          <div class="detail-link-blog">
            <div>
              <p class="mt-2 mb-2 author">
                {{ $moment(publishedat).locale('id').format('L') }} by
                <span
                  ><u>
                    <nuxt-link to="/id/about">Bagas Afrizal</nuxt-link>
                  </u></span
                >
              </p>
            </div>
            <div>
              <p class="mt-2 mb-2 min-read">{{ readingTime }} min read</p>
            </div>
          </div>
        </div>
      </div>
    </b-skeleton-wrapper>
    <!-- <p>{{ excerpt }}</p> -->
  </b-col>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    publishedat: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3,
      showEng: true,
      showIdn: false
    }
  },
  computed: {
    readingTime() {
      let minutes = 0
      const contentAsString = JSON.stringify(this.content)
      const words = contentAsString.split(' ').length
      const wordsPerMinute = 250

      minutes = Math.ceil(words / wordsPerMinute)

      return minutes
    }
  },
  watch: {
    loading(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.clearLoadingTimeInterval()

        if (newValue) {
          this.$_loadingTimeInterval = setInterval(() => {
            this.loadingTime++
          }, 1000)
        }
      }
    },
    loadingTime(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue === this.maxLoadingTime) {
          this.loading = false
        }
      }
    }
  },
  created() {
    this.$_loadingTimeInterval = null
  },
  mounted() {
    this.startLoading()
    const language = localStorage.getItem('local')
    if (language === 'en') {
      this.showIdn = false
      this.showEng = true
    } else if (language === 'id') {
      this.showIdn = true
      this.showEng = false
    }
  },
  methods: {
    clearLoadingTimeInterval() {
      clearInterval(this.$_loadingTimeInterval)
      this.$_loadingTimeInterval = null
    },
    startLoading() {
      this.loading = true
      this.loadingTime = 0
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

@font-face {
  font-family: 'CheltenhamStdBold';
  src: url('@/assets/font/CheltenhamStdBold.otf') format('otf');
}
/* .detail-title {
  padding-top: 150px;
} */

.detail-title p {
  color: #fff;
}

.detail-title h1 {
  position: absolute;
  top: 0;
  left: 0;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  color: #fcfdff;
  background-color: rgba(10, 9, 8, 0);
  font-size: 60px;
  transition: background-color 225ms cubic-bezier(0.4, 0.25, 0.3, 1);
  /* font-family: 'Prompt', sans-serif; */
  font-family: 'CheltenhamStdBold';
  font-weight: bold;
  /* text-shadow: #474747 3px 5px 2px; */
}

.read-more a {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  z-index: 9;
  background: transparent;
  /* width: 50%; */
  padding: 10px 25px;
  border: 1px solid #fff;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

.read-more a:hover {
  background: #fff;
  border: 1px solid #fff;
  color: #000;
  text-decoration: none;
}
/*
.read-more a:hover {
  background: #fff;
  color: #000;
} */

.post-preview-thumbnail {
  position: relative;
  padding-top: 140%;
  transition: padding-top 275ms cubic-bezier(0.2, 0.3, 0.4, 0.9);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  backface-visibility: hidden;
}

.post-preview-thumbnail:hover {
  filter: none;
  -webkit-filter: grayscale(0);
}

.post-preview-thumbnail:hover .read-more a {
  opacity: 1;
}

.post-preview-thumbnail::before {
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -1;
  background: rgba(0, 0, 0, 0);
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}

.post-preview-thumbnail:hover::before {
  background: rgba(0, 0, 0, 0.6);
  content: '';
}
/*
.post-preview-content {
  text-align: center;
  padding: 1rem;
} */

p.author {
  color: var(--color);
  font-family: 'Poppins', sans-serif;
  text-align: left;
}

p.author a {
  color: #f45027;
}

p.min-read {
  color: grey;
  font-family: 'Poppins', sans-serif;
  text-align: right;
}
/* .isloading {
  height: 300px;
} */

.detail-link-blog {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (min-width: 35rem) {
  .post-preview {
    width: 25rem;
    margin: 1rem;
  }
}

@media screen and (max-width: 576px) {
  p.author {
    text-align: center;
  }

  p.min-read {
    text-align: center;
  }
  .detail-title h1 {
    font-size: 48px;
  }
}
</style>
