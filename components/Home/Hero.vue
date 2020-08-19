<template>
  <div id="hero" :lazy-background="backgroundImage">
    <b-container>
      <b-row>
        <b-col>
          <div class="mb-5">
            <div class="caption">
              <h1 class="content-head is-center">
                {{ title }}
              </h1>
              <p class="lead">
                {{ introduction }}
              </p>
              <a
                v-scroll-to="{ el: '#courses', offset: -80 }"
                href="#courses"
                class="btn btn-danger btn-lg mt-3"
              >
                View Programmes
              </a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable no-console */
import util from '~/assets/js/util.js'
export default {
  props: {
    title: { type: String, default: '' },
    introduction: { type: String, default: '' }
  },
  computed: {
    backgroundImage() {
      return util.imageCDN(`~/content/learna/heroes/home-hands-v1.jpg`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/includes/hero.scss';
.caption {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  color: #fff;
  padding: 20px;
}
</style>
