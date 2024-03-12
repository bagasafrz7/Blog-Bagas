<template>
  <span>
    <b-container>
      <b-row>
        <b-col cols="12">
          <section id="project" class="project portfolio">
            <h6>{{ $t('title_project') }}</h6>
            <hr class="lines-project" />
            <div class="list-project">
              <div class="row">
                <div
                  v-for="(item, index) in listDataProject"
                  :key="index"
                  class="col-md-4"
                >
                  <div class="card-project">
                    <div class="detail-project">
                      <div class="img-project">
                        <fa :icon="item.icon" class="building" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="svg-icon"
                        >
                          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                          <path :d="item.icon" />
                        </svg>
                        <a
                          v-if="!item.is_private_link"
                          :href="item.link"
                          target="_blank"
                        >
                          <b-icon
                            icon="box-arrow-up-right"
                            font-scale="1"
                            class="pointer"
                          ></b-icon>
                        </a>
                        <a
                          v-if="item.is_private_link"
                          @click="showModalPrivateLink"
                        >
                          <b-icon
                            icon="box-arrow-up-right"
                            font-scale="1"
                            class="pointer"
                          ></b-icon>
                        </a>
                      </div>
                      <div class="description-project">
                        <h6 @click="openModal(index, item)">
                          {{ item.project_name }}
                        </h6>
                        <p class="description">
                          {{ $t(item.description) }}
                        </p>
                        <div
                          class="see-more text-left pointer"
                          @click="openModal(index, item)"
                        >
                          <a style="font-weight: normal; margin: 10px 0">
                            <span> {{ $t('label_viewmore') }}</span>
                          </a>
                        </div>
                        <div class="tools">
                          <div
                            v-for="(data, indexdetail) in item.tools"
                            :key="indexdetail"
                          >
                            <!-- <fa :icon="data.name" :class="data.class" /> -->
                            <img
                              v-b-tooltip.hover
                              :title="data.title"
                              height="32"
                              width="32"
                              :src="data.name"
                              :class="data.class"
                              :alt="data.title"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="show_more" class="see-more text-right">
              <nuxt-link to="/portfolio">
                <span> {{ $t('label_viewmore') }} </span>
              </nuxt-link>
            </div>
          </section>
        </b-col>
      </b-row>
    </b-container>

    <div v-if="showMenuPrivateLink" id="menu" class="popover1">
      <div class="content">
        <div class="nav">
          <ul class="nav_list">
            <div class="nav_list_item">
              <div class="modal_content">
                <div
                  class="modal_close"
                  title="Close"
                  @click="closeModalPrivateLink"
                >
                  <p class="bx bx-x">x</p>
                </div>
                <p class="assets-succes">✌️</p>
                <h1 class="modal_title">{{ $t('text_link_private') }}</h1>
                <p class="modal_description" style="line-height: 20px">
                  {{ $t('desc_link_private_one') }}
                  <i>Private</i>. <br />
                  {{ $t('desc_link_private_two') }} <br />
                  {{ $t('desc_link_private_three') }}
                  <a
                    href="https://linkedin.com/in/bagas-afrizal"
                    class="link-linkedin"
                    target="_blank"
                    >Linkedin</a
                  >
                  {{ $t('desc_link_private_four') }}
                  <span @click="closeModalPrivateLink">
                    <nuxt-link to="/#contact" class="link-now">{{
                      $t('desc_link_private_five')
                    }}</nuxt-link>
                  </span>
                </p>
                <button
                  class="modal_button-link"
                  @click="closeModalPrivateLink"
                >
                  {{ $t('label_close') }}
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <CustomModal
      :show="isShowModal"
      :close_modal="closeModal"
      :project_name="detailData.project_name"
      :description="detailData.description"
      :icon="detailData.icon"
      :images="detailData.images"
      :link="detailData.link"
      :tools="detailData.tools"
      :thumbnail="detailData.thumbnail"
      :is_private_link="detailData.is_private_link"
      :show_modal_private_link="showModalPrivateLink"
    />
  </span>
</template>

<script>
import aosMixin from '~/plugins/aos'
// eslint-disable-next-line import/order
import dataJson from '~/pages/portfolio/data.json'
import CustomModal from '~/components/CustomModal'

export default {
  components: {
    CustomModal
  },
  mixins: [aosMixin],
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    show_more: {
      type: Boolean,
      required: false
    },
    limit: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      particlesSnow: '',
      titlePage: '',
      scrolled: false,
      scrollTop: false,
      darkMode: true,
      listDataProject: dataJson,
      detailData: {},
      lightboxOptions: {
        type: 'images'
      },
      lightboxItems: [],
      currentLightboxIndex: 0,
      isShowModal: false,
      items: [
        'https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*'
      ],
      index: null,
      showMenuPrivateLink: false
    }
  },
  mounted() {
    if (this.limit) {
      const newDataProject = dataJson.slice(0, 6)
      this.listDataProject = newDataProject
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 400) {
        this.scrollTop = true
      } else {
        this.scrollTop = false
      }
      // console.log(window.scrollY)
    },
    toggleSwitch() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
      // console.log(this.$colorMode.preference)
      this.darkMode = !this.darkMode
    },
    openModal(index, value) {
      this.isShowModal = true
      this.detailData = value
    },
    closeModal() {
      this.isShowModal = false
      this.detailData = {}
    },
    showModalPrivateLink() {
      if (this.isShowModal) {
        this.showMenuPrivateLink = true
        this.isShowModal = false
        this.detailData = {}
      } else {
        this.showMenuPrivateLink = true
      }
    },
    closeModalPrivateLink() {
      this.showMenuPrivateLink = false
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

@font-face {
  font-family: 'futura';
  src: url('@/assets/font/futura/FuturaBold.ttf') format('ttf');
}
.content {
  color: #777777;
  font-family: 'Poppins', sans-serif;
}

.flex-portfolio {
  display: flex;
}
.description {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.link-linkedin {
  color: #0a66c2;
  text-decoration: underline;
  font-size: 16px;
  font-weight: bold;
}
.link-now {
  color: var(--color-logo);
  text-decoration: underline;
  font-size: 16px;
  font-weight: bold;
}
</style>
