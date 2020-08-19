<template>
  <div class="card mb-2 min-w-300 text-dark h-100 shadow-sm">
    <img
      v-lazy-load
      :src="loadingImage"
      :data-src="imageURL"
      :alt="title"
      class="card-img-top"
    />
    <div class="card-body">
      <h4 class="card-title">
        <nuxt-link
          :to="{
            name: 'courses-slug',
            params: { slug: slug }
          }"
          class="card-title"
        >
          {{ title }}
        </nuxt-link>
      </h4>
      <p class="card-text">
        {{ text }}
      </p>
      <b-button
        :to="{
          name: 'courses-slug',
          params: { slug: slug }
        }"
        variant="primary"
        class="stretched-link w-100"
      >
        View Course
      </b-button>
    </div>
  </div>
</template>

<script>
import util from '~/assets/js/util.js'
export default {
  props: {
    title: { type: String, default: '' },
    slug: { type: String, default: '' },
    text: { type: String, default: '' },
    image: { type: String, default: '' }
  },
  computed: {
    imageURL() {
      return util.imageCDN(this.image)
    },
    loadingImage() {
      return util.loadingImage()
      // return util.loadingImageCDN(this.image)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-text {
  min-height: 120px;
  color: #6c757d;
}
.card-title {
  color: #f0508a;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  text-decoration: none !important;
  cursor: pointer;
  min-height: 55px;
  margin-bottom: 0.75rem;
}
</style>
