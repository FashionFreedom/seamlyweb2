<template>
  <section class="page-section pt-5 pb-5">
    <b-container>
      <h2 class="text-center text-muted mb-5">Our Partners</h2>
      <p>
        Learna programmes are authored and delivered in collaboration with
        internationally recognised educational leaders. We are exceptionally
        proud of the work that we do with our partners, they help us ensure that
        each programme is delivered to a high standard and that students have
        access to the best quality education.
      </p>
      <hr class="divider my-4 mt-5" />
      <b-row>
        <b-col class="text-center logo-partner">
          <img
            v-lazy-load
            :src="loadingImage"
            :data-src="imageCDN('~/content/diploma-msc/trinity.png', 300)"
            width="300"
          />
        </b-col>
        <b-col class="text-center logo-partner">
          <img
            v-lazy-load
            :src="loadingImage"
            :data-src="
              imageCDN('~/content/diploma-msc/logos/gib-logo-small-v1.png')
            "
            class="mt-3"
          />
        </b-col>
        <b-col class="text-center">
          <img
            v-lazy-load
            :src="loadingImage"
            :data-src="imageCDN('~/content/diploma-msc/logo-partner-usw.png')"
            width="300"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import util from '~/assets/js/util.js'
export default {
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
@media only screen and (max-width: 768px) {
  .logo-partner {
    margin-bottom: 2rem !important;
  }
}
h2 {
  font-weight: 400;
}
</style>
