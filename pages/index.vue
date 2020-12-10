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
        <b-col cols="12">
          <Particles
            id="tsparticles"
            :options="{
              background: {
                color: {
                  value: '#000'
                }
              },
              fpsLimit: 100,
              interactivity: {
                detectsOn: 'canvas',
                events: {
                  onClick: {
                    enable: true,
                    mode: 'push'
                  },
                  onHover: {
                    enable: true,
                    mode: 'repulse'
                  },
                  resize: true
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.4,
                    size: 40
                  },
                  push: {
                    quantity: 4
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.1
                  }
                }
              },
              particles: {
                color: {
                  value: '#ffffff'
                },
                collisions: {
                  enable: true
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outMode: 'bounce',
                  random: false,
                  speed: 6,
                  straight: false
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800
                  },
                  value: 80
                },
                opacity: {
                  value: 0.2
                },
                shape: {
                  type: 'circle'
                },
                size: {
                  random: true,
                  value: 5
                }
              },
              detectRetina: true
            }"
          />
        </b-col>
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
  },
  data() {
    return {
      particlesSnow: ''
    }
  }
}
</script>

<style scoped>
canvas.tsparticles-canvas-el {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  pointer-events: initial;
}

.main-content {
  background: #000;
}

.hero-img {
  position: absolute;
  top: 75px;
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
  font-size: 48px;
  color: #fff;
}

.hero-img p {
  width: 50%;
  margin: 25px auto 0;
  color: rgb(143, 143, 143);
  font-size: 18px;
  font-weight: 100 !important;
}

@media screen and (min-width: 768px) {
  #tsparticles {
    width: 100%;
    height: 650px;
  }
}

@media screen and (max-width: 576px) {
  #tsparticles {
    width: 100%;
    height: 1000px;
  }
}
</style>
