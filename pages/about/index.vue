<template>
  <section id="about-page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- <b-skeleton-wrapper :loading="loading">
            <template #loading>
              <b-card>
                <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
              </b-card>
            </template>
          </b-skeleton-wrapper> -->
          <div class="hero-about">
            <div class="row">
              <div class="col-md-3">
                <div class="img-profile">
                  <img src="@/assets/img/pp_ig_hd.png" alt="" srcset="" />
                </div>
              </div>
              <div class="col-md-9">
                <p class="about-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, eveniet. Culpa, expedita? Temporibus, minus ad
                  libero fugit nobis non doloremque aut quasi facere dolorum
                  sequi voluptate assumenda! Atque ut autem delectus repellendus
                  ratione consequatur mollitia, nam illo rerum reiciendis.
                  <br />
                  <br />
                  Quo commodi in voluptatibus est nam quisquam optio repellendus
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
          </div>
          <hr />
          <div class="row">
            <div class="col-md-6">
              <div class="content">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat voluptatum culpa ducimus molestiae ad temporibus
                  officiis ea quia. Sint, ex possimus. Mollitia vel voluptas
                  eaque dolorem numquam, non voluptatibus id nulla impedit
                  tempora saepe ut temporibus excepturi debitis amet officiis?
                  Velit quos quas natus. <br />
                  <br />
                  Earum repudiandae aliquam similique asperiores laboriosam
                  ratione, culpa iure quo maiores numquam molestias ex
                  blanditiis nihil provident excepturi, neque sequi facere quia.
                  Aperiam officia sunt magni, illum velit ipsam suscipit
                  nesciunt maiores repudiandae pariatur eius quisquam a iusto,
                  dolore ullam magnam commodi obcaecati dolorum minus
                  repellendus consectetur necessitatibus odit possimus aut?
                  <br />
                  <br />
                  Quibusdam corporis, laborum porro autem quo deserunt
                  architecto tenetur alias omnis quod id earum vitae, placeat,
                  repellendus unde commodi quis magni laboriosam totam dolore a
                  ducimus ullam labore. Praesentium aut necessitatibus,
                  veritatis sunt sed quam dignissimos inventore ipsum velit
                  deleniti facere ipsam nemo. Facilis aspernatur a aperiam
                  cupiditate blanditiis quis autem hic recusandae inventore
                  sunt!
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="title-two">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
          <div class="social-media">
            <div class="row">
              <div class="col-md-4">
                <div class="title">
                  <p>My Social Media</p>
                </div>
                <div class="detail-sosmed">
                  <a
                    href="https://www.instagram.com/bagasafrizall/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <fa :icon="['fab', 'instagram']" class="instagram" />
                  </a>
                  <a
                    href="https://twitter.com/bagasss_i"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <fa :icon="['fab', 'twitter']" class="twitter" />
                  </a>
                  <a
                    href="https://github.com/bagasafrz7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <fa :icon="['fab', 'github']" class="github" />
                  </a>
                  <a
                    href="https://linkedin.com/in/bagas-afrizal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <fa :icon="['fab', 'linkedin']" class="linkedin" />
                  </a>
                </div>
              </div>
              <div class="col-md-8">
                <p class="contact-me">Contact Me</p>
                <div class="login-box">
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="user-box">
                          <input type="text" name="" required />
                          <label>Name</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="user-box">
                          <input type="email" name="" required />
                          <label>Email</label>
                        </div>
                      </div>
                    </div>
                    <div class="user-box">
                      <input type="text" name="" required />
                      <label>Your Message</label>
                      <!-- <textarea name="" id="" cols="30" rows="5"></textarea> -->
                    </div>
                    <a type="submit">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Submit
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

/* #about-page {
  background: #121212;
} */

.hero-about {
  margin: 50px 0 0 0;
}

.img-profile img {
  width: 100%;
}

p.about-text {
  color: #777777;
  margin: 25px 0;
  font-family: 'Poppins', sans-serif;
}

.title-two p {
  font-weight: 600;
  font-size: 80px;
  line-height: 85px;
  letter-spacing: -1px;
  padding-right: 0px;
  margin-bottom: 50px;
  color: var(--color);
  font-family: 'Poppins', sans-serif;
}

.content {
  color: #777777;
  font-family: 'Poppins', sans-serif;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #121212;
  background-clip: border-box;
  /* height: 250px; */
  border: 1px solid #121212;
  border-radius: 0px;
  /* height: 500px; */
  margin-bottom: 350px;
}

.social-media .title p {
  color: var(--color);
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
}

hr {
  background: #777777;
  margin: 50px 0;
}

.detail-sosmed .instagram,
.twitter,
.github,
.linkedin {
  color: var(--color);
  font-size: 32px;
  margin: 0 10px;
  transition: ease-in 0.5s;
}

.detail-sosmed .instagram:hover {
  color: #e4405f;
}
.detail-sosmed .twitter:hover {
  color: #1da1f2;
}
.detail-sosmed .github:hover {
  color: rgb(90, 90, 90);
}
.detail-sosmed .linkedin:hover {
  color: #0a66c2;
}

p.contact-me {
  color: var(--color);
  font-family: 'Poppins', sans-serif;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: var(--color);
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid var(--color);
  outline: none;
  background: transparent;
}

.login-box .user-box textarea {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: var(--color);
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid var(--color);
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: var(--color);
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box label.text-area {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: var(--color);
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #f7b633;
  font-size: 12px;
}

.login-box .user-box textarea:focus ~ label,
.login-box .user-box textarea:valid ~ label {
  top: -20px;
  left: 0;
  color: #f7b633;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #f7b633;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin: 10px 0;
  letter-spacing: 4px;
}

.login-box a:hover {
  background: #f7b633;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #f7b633, 0 0 25px #f7b633, 0 0 50px #f7b633,
    0 0 100px #f7b633;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #f7b633);
  animation: btn-anim1 2s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #f7b633);
  animation: btn-anim2 2s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #f7b633);
  animation: btn-anim3 2s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #f7b633);
  animation: btn-anim4 2s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
