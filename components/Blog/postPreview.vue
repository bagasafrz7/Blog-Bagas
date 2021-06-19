<template>
  <b-col sm="12" md="6" lg="6" xl="4" class="mt-4 text-center">
    <div
      :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      class="post-preview-thumbnail"
    >
      <div class="detail-title">
        <h1>{{ title }}</h1>
      </div>
      <div class="read-more">
        <nuxt-link :to="'/blog/' + id"> Read More </nuxt-link>
      </div>
    </div>
    <p class="text-left mt-2 mb-2">
      {{ publishedat.slice(0, 10) }} by
      <span
        ><u>
          <nuxt-link to="/about">Bagas Afrizal</nuxt-link>
        </u></span
      >
    </p>
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
    }
  }
}
</script>

<style scoped>
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
  font-size: 63px;
  transition: background-color 225ms cubic-bezier(0.4, 0.25, 0.3, 1);
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
  width: 50%;
  padding: 10px 25px;
  border: 1px solid #fff;
  color: #fff;
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

@media (min-width: 35rem) {
  .post-preview {
    width: 25rem;
    margin: 1rem;
  }
}
</style>
