<template>
  <section id="about-page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <b-skeleton-wrapper :loading="loading">
            <template #loading>
              <b-card>
                <b-skeleton width="100%"></b-skeleton>
                <b-skeleton width="75%"></b-skeleton>
                <b-skeleton width="50%"></b-skeleton>
              </b-card>
            </template>

            <h2>Tentang Saya</h2>
            <div class="row">
              <div class="col-md-3">
                <div class="img-profile">
                  <img src="@/assets/img/pp_ig_hd.png" alt="" srcset="" />
                </div>
              </div>
              <div class="col-md-9">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, eveniet. Culpa, expedita? Temporibus, minus ad
                  libero fugit nobis non doloremque aut quasi facere dolorum
                  sequi voluptate assumenda! Atque ut autem delectus repellendus
                  ratione consequatur mollitia, nam illo rerum reiciendis. Quo
                  commodi in voluptatibus est nam quisquam optio repellendus
                  cumque vel! Natus neque totam tempore mollitia quas nisi
                  voluptatem repellendus earum non. Dicta harum rerum fuga. Ab
                  facilis quae natus repellendus maiores eius minima animi
                  dolores saepe commodi vitae iste voluptatem aliquid deserunt
                  officiis, tempore sapiente inventore, ad velit aliquam
                  cupiditate? Deserunt eos perspiciatis aliquam sed facere nisi
                  hic quam perferendis?
                </p>
              </div>
            </div>
            <h2>Hubungi Saya</h2>
          </b-skeleton-wrapper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3
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
#about-page {
  background: #fcfdff;
}

.img-profile img {
  width: 100%;
}
</style>
