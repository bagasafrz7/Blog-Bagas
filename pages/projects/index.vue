<template>
  <div class="project">
    <div class="container">
      <!-- <h2>Projects</h2> -->
      <!-- <p class="sub-title">Some projects I worked on previously.</p> -->
      <div class="row">
        <div class="col-md-6">
          <div class="list-project">
            <div class="detail-project">
              <div class="img-project">
                <fa :icon="['far', 'building']" class="building" />
              </div>
              <div class="description-project">
                <h6>Jualrumahpluit.com</h6>
                <p>
                  {{ $t('deskripsi_jualrumah') }}
                </p>
                <a
                  href="https://jualrumahpluit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ $t('label_viewmore') }}</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'html5']" class="html5 detail-tools" />
                  <fa
                    :icon="['fab', 'css3-alt']"
                    class="css3-alt detail-tools"
                  />
                  <fa :icon="['fab', 'react']" class="react detail-tools" />
                  <fa :icon="['fab', 'php']" class="php detail-tools" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="list-project">
            <div class="detail-project">
              <div class="img-project">
                <fa :icon="['far', 'hospital']" class="building" />
              </div>
              <div class="description-project">
                <h6>RS PGI Cikini Drive Thru</h6>
                <p>
                  {{ $t('deskripsi_cikini') }}
                </p>
                <a
                  href="https://rscikinidrivethru.com/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ $t('label_viewmore') }}</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'vuejs']" class="vuejs detail-tools" />
                  <fa
                    :icon="['fab', 'bootstrap']"
                    class="bootstrap detail-tools"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="list-project">
            <div class="detail-project">
              <div class="img-project">
                <fa :icon="['fas', 'business-time']" class="building" />
              </div>
              <div class="description-project">
                <h6>Marvel Food</h6>
                <p>
                  {{ $t('deskripsi_marvel') }}
                </p>
                <a
                  href="http://marvelfood.co.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ $t('label_viewmore') }}</a
                >
                <div class="tools">
                  <img
                    src="@/assets/img/favicon.png"
                    alt=""
                    srcset=""
                    class="detail-tools"
                  />
                  <fa
                    :icon="['fab', 'js']"
                    class="js detail-tools detail-tools"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="list-project">
            <div class="detail-project">
              <div class="img-project">
                <fa :icon="['fas', 'store']" class="building" />
              </div>
              <div class="description-project">
                <h6>Space Point of Sale</h6>
                <p>
                  {{ $t('deskripsi_pos') }}
                </p>
                <a
                  href="https://pos-space.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ $t('label_viewmore') }}</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'vuejs']" class="vuejs detail-tools" />
                  <fa :icon="['fab', 'js']" class="js detail-tools" />
                  <fa :icon="['fab', 'node-js']" class="node-js detail-tools" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="list-project">
            <div class="detail-project">
              <div class="img-project">
                <fa :icon="['fas', 'network-wired']" class="building" />
              </div>
              <div class="description-project">
                <h6>Portal Job - BADAG</h6>
                <p>
                  {{ $t('deskripsi_badag') }}
                </p>
                <a
                  href="https://badag.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ $t('label_viewmore') }}</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'vuejs']" class="vuejs detail-tools" />
                  <fa :icon="['fab', 'js']" class="js detail-tools" />
                  <fa :icon="['fab', 'node-js']" class="node-js detail-tools" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="list-project">
            <div class="detail-project">
              <div class="img-project">
                <fa :icon="['fas', 'money-check-alt']" class="building" />
              </div>
              <div class="description-project">
                <h6>Nepays</h6>
                <p>
                  {{ $t('deskripsi_nepays') }}
                </p>
                <a
                  href="https://nepays.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ $t('label_viewmore') }}</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'vuejs']" class="vuejs detail-tools" />
                  <fa :icon="['fab', 'js']" class="js detail-tools" />
                  <fa :icon="['fab', 'node-js']" class="node-js detail-tools" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="list-project">
            <div class="detail-project">
              <div class="img-project">
                <fa :icon="['far', 'comments']" class="building" />
              </div>
              <div class="description-project">
                <h6>Play Chat</h6>
                <p>
                  {{ $t('deskripsi_playchat') }}
                </p>
                <a
                  href="https://play-chat.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ $t('label_viewmore') }}</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'vuejs']" class="vuejs detail-tools" />
                  <fa :icon="['fab', 'js']" class="js detail-tools" />
                  <fa :icon="['fab', 'node-js']" class="node-js detail-tools" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="list-project">
            <div class="detail-project">
              <div class="img-project">
                <fa :icon="['fas', 'virus']" class="building" />
              </div>
              <div class="description-project">
                <h6>Tracking Covid</h6>
                <p>
                  {{ $t('deskripsi_covid') }}
                </p>
                <a
                  href="https://pandemi-data.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ $t('label_viewmore') }}</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'react']" class="react detail-tools" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titlePage: ''
    }
  },
  mounted() {
    if (this.$i18n.locale === 'id') {
      this.titlePage = 'Portofolio Bagas Afrizal'
    } else {
      this.titlePage = 'Portfolio Bagas Afrizal'
    }
  },
  head() {
    return {
      title: this.titlePage,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Portofolio Bagas Afrizal'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Bagas Afrizal,Portofolio Bagas Afrizal, Bagas, Afrizal, Frontend Developer, Pemuda Indonesia, bagasafrizal.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.project {
  background: var(--bg);
}
.project h2,
p.sub-title {
  color: var(--color);
  font-family: 'Poppins', sans-serif;
}
.list-project {
  background: #eaeef6;
  padding: 20px;
  border-radius: 25px;
  margin: 15px 0;
}
.detail-project {
  display: flex;
  flex-direction: column;
}
.img-project {
  margin: 15px auto;
}
.html5 {
  color: #e34f26;
  font-size: 32px;
}
.css3-alt {
  color: #1da1f2;
  font-size: 32px;
}
.react {
  color: #00d8ff;
  font-size: 32px;
}
.vuejs {
  color: #42b883;
  font-size: 32px;
}
.bootstrap {
  color: #410093;
  font-size: 32px;
}
.php {
  color: #8892be;
  font-size: 32px;
}
.js {
  color: #f7df1e;
  font-size: 32px;
}
.node-js {
  color: #44883e;
  font-size: 32px;
}
.img-project .building {
  font-size: 72px;
  margin: 10px 0;
  color: #000;
}
.description-project h6,
p {
  font-family: 'Poppins', sans-serif;
}
.description-project h6 {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}
.description-project p {
  color: rgb(110, 110, 110);
  margin: 5px 0;
}
.description-project a {
  color: #f7b633;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
}
.tools {
  margin: 10px 5;
  display: flex;
  flex-direction: row;
}
.detail-tools {
  margin: 0 5px;
}

@media screen and (max-width: 768px) {
  .detail-project {
    display: flex;
    flex-direction: column;
  }
  .img-project {
    margin: 0 auto;
  }
  .description-project h6 {
    margin: 15px 0 0 0;
  }
}
</style>
