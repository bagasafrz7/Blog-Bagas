<template>
  <div class="project">
    <div class="container">
      <h2>Projects</h2>
      <p class="sub-title">Some projects I worked on previously.</p>
      <div class="row">
        <div class="col-md-6">
          <div class="list-project">
            <div class="detail-project">
              <div class="img-project">
                <fa :icon="['far', 'building']" class="building" />
              </div>
              <div class="description-project">
                <h6>Jualrumahpluit.com</h6>
                <p>description</p>
                <a
                  href="https://jualrumahpluit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Lihat Project...</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'html5']" class="html5" />
                  <fa :icon="['fab', 'css3-alt']" class="css3-alt" />
                  <fa :icon="['fab', 'react']" class="react" />
                  <fa :icon="['fab', 'php']" class="php" />
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
                <p>description</p>
                <a
                  href="http://dev.andtechnology.me/rscikini/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Lihat Project...</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'vuejs']" class="vuejs" />
                  <fa :icon="['fab', 'bootstrap']" class="bootstrap" />
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
                <fa :icon="['fas', 'store']" class="building" />
              </div>
              <div class="description-project">
                <h6>Space Point of Sale</h6>
                <p>description</p>
                <a
                  href="https://pos-space.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Lihat Project...</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'vuejs']" class="vuejs" />
                  <fa :icon="['fab', 'js']" class="js" />
                  <fa :icon="['fab', 'node-js']" class="node-js" />
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
                <p>description</p>
                <a
                  href="https://nepays.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Lihat Project...</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'vuejs']" class="vuejs" />
                  <fa :icon="['fab', 'js']" class="js" />
                  <fa :icon="['fab', 'node-js']" class="node-js" />
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
                <p>description</p>
                <a
                  href="https://badag.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Lihat Project...</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'vuejs']" class="vuejs" />
                  <fa :icon="['fab', 'js']" class="js" />
                  <fa :icon="['fab', 'node-js']" class="node-js" />
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
                <p>description</p>
                <a
                  href="https://pandemi-data.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Lihat Project...</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'react']" class="react" />
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
                <p>description</p>
                <a
                  href="https://play-chat.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Lihat Project...</a
                >
                <div class="tools">
                  <fa :icon="['fab', 'vuejs']" class="vuejs" />
                  <fa :icon="['fab', 'js']" class="js" />
                  <fa :icon="['fab', 'node-js']" class="node-js" />
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
    return {}
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
  flex-direction: row;
}
.img-project {
  margin: 0 15px 0 0;
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
  color: #000;
}
.description-project a {
  color: #f7b633;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
}
</style>
