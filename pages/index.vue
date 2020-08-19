<template>
  <div id="home">
    <Hero
      title="SEAMLY 2D Open Source Pattern Design Software"
      introduction=""
    />

    <b-container>
      <b-row>
        <b-col><Courses /></b-col>
      </b-row>
      <b-row>
        <b-col><Partners /></b-col>
      </b-row>
    </b-container>

    <WhyUs />

    <b-container>
      <b-row>
        <b-col><Testimonials /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Hero from '~/components/Home/Hero.vue'
import Courses from '~/components/Home/Courses.vue'
import Partners from '~/components/Home/Partners.vue'
import WhyUs from '~/components/Home/WhyUs.vue'
import Testimonials from '~/components/Home/Testimonials.vue'

export default {
  scrollToTop: true,
  components: {
    Hero,
    Courses,
    Partners,
    WhyUs,
    Testimonials
  },
  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'
      return `calc(${height} - ${this.$vuetify.application.top}px)`
    }
  },
  head() {
    return {
      title: 'learna.ac.uk',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
