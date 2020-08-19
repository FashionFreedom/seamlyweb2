<template>
  <b-card
    overlay
    img-alt="Image"
    img-top
    tag="article"
    style="height: 25rem;"
    class="mb-2 min-w-360 text-center shadow-sm bg-warning text-light"
    ><div class="card-body">
      <img
        v-lazy-load
        :src="loadingImage"
        data-src="https://picsum.photos/600/300/?image=25"
        class="card-img-top customer-image border border-light"
      />
    </div>
    <h5 class="card-title primary-txt">{{ name }}</h5>
    <b-card-text class="text-dark"> “{{ text }}” </b-card-text>
  </b-card>
</template>

<script>
import util from '~/assets/js/util.js'
export default {
  props: {
    name: { type: String, default: '' },
    text: { type: String, default: '' },
    image: { type: String, default: '' }
  },
  computed: {
    loadingImage() {
      return util.loadingImage()
    }
  },
  methods: {
    imageCDN: (image, width) => util.imageCDN(image, width)
  }
}
</script>

<style lang="scss" scoped>
.customer-image {
  height: 125px;
  width: 125px;
  border-radius: 100px;
  padding: 10px;
  background-color: white;
}
.primary-txt {
  color: #2464b0;
}
</style>
