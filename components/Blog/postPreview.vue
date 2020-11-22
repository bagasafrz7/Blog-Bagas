<template>
  <b-col cols="12" md="12" lg="4" class="mt-4 text-center">
    <div
      :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      class="post-preview-thumbnail"
    >
      <div class="detail-title">
        <h1>{{ title }}</h1>
        <p>{{ excerpt }}</p>
        <div class="read-more">
          <nuxt-link :to="'/blog/' + id"> Read More </nuxt-link>
        </div>
      </div>
    </div>
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
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.detail-title {
  padding-top: 150px;
}

.detail-title p {
  color: #fff;
}

.detail-title h1 {
  color: #fff;
  filter: brightness(100%);
}

.read-more a {
  border: 1px solid #fff;
  background: transparent;
  margin: 0 auto;
  padding: 15px 50px;
  text-decoration: none;
  color: #fff;
  transition: 1s ease-in;
}

.read-more a:hover {
  background: #fff;
  color: #000;
}

.post-preview-thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 400px;
  transition: transform 0.3s, filter 1s ease-in-out;
  filter: grayscale(100%);
}

.post-preview-thumbnail:hover {
  filter: grayscale(0);
  transform: scale(1.01);
}

.post-preview-content {
  text-align: center;
  padding: 1rem;
}

@media (min-width: 35rem) {
  .post-preview {
    width: 25rem;
    margin: 1rem;
  }
}
</style>
