<template>
  <div class="main-content">
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <Particles
            id="tsparticles"
            :options="{
              background: {
                color: {}
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
                  value: 'rgb(104, 104, 104)'
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
          <h1>
            Hi!👋 <br />
            I'm <span>Bagas Afrizal </span>
          </h1>
          <p>Tech Enthusiast, Frontend Engineer and Pemuda Indonesia</p>
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
  data() {
    return {
      particlesSnow: ''
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

canvas.tsparticles-canvas-el {
  width: 100%;
  /* background: #121212; */
  pointer-events: initial;
}

/* .main-content {
  background: #121212;
} */

.hero-img {
  position: absolute;
  top: 25%;
}

.hero-img h1 {
  width: 50%;
  margin: 25px auto;
  font-size: 80px;
  color: var(--color);
  font-family: 'Poppins', sans-serif;
}

.hero-img h1 span {
  font-weight: bold;
  color: #f7b633;
  font-family: 'Poppins', sans-serif;
}

.hero-img p {
  width: 50%;
  margin: 25px auto 0;
  color: var(--sub-color);
  font-size: 20px;
  font-weight: 100 !important;
}

/* About */
.about-me h2,
h4,
p {
  color: #000;
}

.about-image img {
  width: 75%;
}
/* About */

@media screen and (min-width: 768px) {
  #tsparticles {
    width: 100%;
    height: 650px;
  }
  .hero-img h1 {
    width: 100%;
    font-size: 64px;
  }
}

@media screen and (max-width: 576px) {
  #tsparticles {
    width: 100%;
    height: 500px;
  }
  .hero-img h1 {
    width: 100%;
    font-size: 40px;
  }
  .hero-img p {
    font-size: 16px;
  }
}
</style>
