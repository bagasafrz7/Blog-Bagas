<template>
  <div>
    <div class="section">
      <input
        ref="modalCheckbox"
        class="modal-btn"
        type="checkbox"
        name="modal-btn"
        :checked="show"
      />
      <label for="modal-btn" @click="close_modal">
        <i class="uil uil-expand-arrows"></i>
      </label>
      <div class="modal">
        <div class="modal-wrap">
          <img
            :src="processedThumbnail ? processedThumbnail[0] : ``"
            :alt="`thumbnail-project-${project_name}`"
            class="thumbnail"
          />
          <!-- <carousel-3d
            :autoplay="true"
            :autoplay-timeout="3000"
            :display="3"
            :count="images ? images.length : 0"
            :perspective="0"
            :space="400"
          >
            <slide
              v-for="(image, i) in processedImages"
              :key="i"
              :index="i"
              @click="index = i"
            >
              <template
                slot-scope="{ index, isCurrent, leftIndex, rightIndex }"
              >
                <img
                  :src="image"
                  alt="image-project"
                  :data-index="index"
                  :class="{
                    current: isCurrent,
                    onLeft: leftIndex >= 0,
                    onRight: rightIndex >= 0
                  }"
                />
              </template>
            </slide>
          </carousel-3d> -->
          <div class="detail-project">
            <div class="img-project">
              <div style="display: flex; align-items: center; gap: 15px">
                <fa :icon="icon" class="building" />
                <svg
                  v-if="typeof icon !== undefined && typeof icon === 'string'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-icon"
                >
                  <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path :d="icon" />
                </svg>
                <a v-if="!is_private_link" :href="link" target="_blank">
                  <h6>{{ project_name }}</h6>
                </a>
                <a v-if="is_private_link" @click="show_modal_private_link">
                  <h6>{{ project_name }}</h6>
                </a>
              </div>
              <a v-if="!is_private_link" :href="link" target="_blank">
                <b-icon
                  icon="box-arrow-up-right"
                  font-scale="1"
                  class="pointer"
                ></b-icon>
              </a>
              <a v-if="is_private_link" @click="show_modal_private_link">
                <b-icon
                  icon="box-arrow-up-right"
                  font-scale="1"
                  class="pointer"
                ></b-icon>
              </a>
            </div>
            <div class="description-project">
              <p class="description">
                {{ $t(description) }}
              </p>
              <div class="tools">
                <div v-for="(data, indexdetail) in tools" :key="indexdetail">
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
</template>

<script>
export default {
  components: {},
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    project_name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: Array,
      required: true
    },
    thumbnail: {
      type: Array,
      required: true
    },
    images: {
      type: Array,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    // eslint-disable-next-line vue/prop-name-casing
    is_private_link: {
      type: Boolean,
      required: true
    },
    tools: {
      type: Array,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    },
    // eslint-disable-next-line vue/prop-name-casing
    close_modal: {
      type: Function,
      required: true
    },
    // eslint-disable-next-line vue/prop-name-casing
    show_modal_private_link: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      items: [
        'https://images.unsplash.com/photo-1594862565524-acad491f0958?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1512845296467-183ccf124347?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1555178715-09cb7406643b?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      index: null
    }
  },
  computed: {
    processedImages() {
      return this.images
        ? this.images.map((image) => require(`@/assets/${image}`))
        : []
    },
    processedThumbnail() {
      return this.thumbnail && this.thumbnail.length > 0
        ? this.thumbnail.map((img) => require(`@/assets/${img}`))
        : [`https://placehold.co/1920x1080?text=Thumbnail`]
    }
  },
  watch: {},
  updated() {
    console.log('Length of icon array:', typeof this.icon)
  },
  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    // closeModal() {
    //   this.$refs.modalCheckbox.checked = false
    //   this.$emit('close_modal')
    // }
  }
}
</script>

<style scoped>
.section {
  position: relative;
  width: 100%;
  display: block;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
}
.full-height {
  min-height: 100vh;
}

[type='checkbox']:checked,
[type='checkbox']:not(:checked) {
  position: absolute;
  left: -9999px;
}
.modal-btn:checked + label {
  position: relative;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 2;
  height: 50px;
  transition: all 200ms linear;
  border-radius: 4px;
  width: 240px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  -ms-flex-item-align: center;
  align-self: center;
  border: none;
  cursor: pointer;
  color: #ffeba7;
  box-shadow: 0 12px 35px 0 rgba(16, 39, 112, 0.25);
}
.modal-btn:not(:checked) + label:hover {
  background-color: #ffeba7;
  color: #102770;
}
.modal-btn:checked + label .uil,
.modal-btn:not(:checked) + label .uil {
  margin-left: 10px;
  font-size: 18px;
}
.modal-btn:checked + label:after,
.modal-btn:not(:checked) + label:after {
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 110;
  width: 40px;
  border-radius: 3px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  background-color: #ffeba7;
  color: #102770;
  font-family: 'unicons';
  content: '\eac6';
  box-shadow: 0 12px 25px 0 rgba(16, 39, 112, 0.25);
  transition: all 200ms linear;
  opacity: 0;
  pointer-events: none;
  transform: translateY(20px);
}
.modal-btn:checked + label:hover:after,
.modal-btn:not(:checked) + label:hover:after {
  background-color: #102770;
  color: #ffeba7;
}
.modal-btn:checked + label:after {
  transition: opacity 300ms 300ms ease, transform 300ms 300ms ease,
    background-color 250ms linear, color 250ms linear;
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
  content: 'X';
}
.modal {
  position: fixed;
  display: block;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow-x: hidden;
  background-color: rgba(31, 32, 41, 0.75);
  pointer-events: none;
  opacity: 0;
  transition: opacity 250ms 700ms ease;
}
.modal-btn:checked ~ .modal {
  pointer-events: auto;
  opacity: 1;
  transition: all 300ms ease-in-out;
}
.modal-wrap {
  position: relative;
  display: block;
  width: 100%;
  max-width: 800px;
  height: 600px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  padding-bottom: 20px;
  background-color: var(--bg-secondary);
  -ms-flex-item-align: center;
  align-self: center;
  opacity: 0;
  transform: scale(0.6);
  transition: opacity 250ms 250ms ease, transform 300ms 250ms ease;
  border-radius: 10px;
  padding: 25px;
  overflow-y: scroll;
}
.modal-wrap img {
  display: block;
  /* width: 100%; */
  height: auto;
}
.modal-wrap p {
  /* padding: 20px 30px 0 30px; */
}
.modal-btn:checked ~ .modal .modal-wrap {
  opacity: 1;
  transform: scale(1);
  transition: opacity 250ms 500ms ease, transform 350ms 500ms ease;
}

.logo {
  position: absolute;
  top: 25px;
  left: 25px;
  display: block;
  z-index: 1000;
  transition: all 250ms linear;
}
.logo img {
  height: 26px;
  width: auto;
  display: block;
  filter: brightness(10%);
  transition: filter 250ms 700ms linear;
}
.modal-btn:checked ~ .logo img {
  filter: brightness(100%);
  transition: all 250ms linear;
}
.detail-project {
  margin: 30px 0 0 0;
}
.detail-project h6 {
  font-size: 22px;
  font-weight: bold;
  color: var(--color-white);
}
.detail-project h6:hover {
  cursor: pointer;
  color: var(--color-primary);
  text-decoration: none;
}
.description-project p {
  color: var(--color-secondary2);
  margin: 5px 0;
}
.description-project a {
  color: var(--color-primary);
  font-weight: bold;
}
.description {
  margin: 25px 0;
}
.tools {
  margin: 50px 5px 10px 5px;
  display: flex;
  flex-direction: row;
}
.detail-tools {
  margin: 0 5px;
}
.img-project {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 15px 0;
}
.thumbnail {
  border-radius: 10px 10px 0 0;
}
@media screen and (max-width: 500px) {
  .modal-wrap {
    width: calc(100% - 40px);
    padding-bottom: 15px;
  }
  .modal-wrap p {
    padding: 15px 20px 0 20px;
  }
}
</style>
