<template>
  <div id="app">
    <NavBar />
    <div id="content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>


<script>
/* eslint-disable no-console */
import NavBar from '~/components/Layout/NavBar'
import Footer from '~/components/Layout/Footer'
export default {
  scrollToTop: true,
  name: 'DefaultLayout',
  components: {
    NavBar,
    Footer
  },
  asyncData({ store, params }) {
    return {
      courseSlug: () => {
        const courseSlug = store.state.courses.courseSlug
        console.log('courseSlug: ', courseSlug)
        return courseSlug
      }
    }
  },
  head() {
    return {
      titleTemplate: '%s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path
        }
      ]
    }
  }
}
</script>


<style lang="scss">
h1 {
  text-align: center;
}

#content {
  margin-top: 81px;
}

@media only screen and (max-width: 768px) {
  #content {
    margin-top: 65px !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 460px;
}

@media (min-width: 768px) {
  body {
    margin-bottom: 310px;
  }
}
</style>
