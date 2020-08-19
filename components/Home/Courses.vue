<template>
  <div id="courses">
    <section class="page-section pt-5">
      <b-container>
        <h2 id="programmes" class="text-center text-muted mb-5">
          Our Productions
        </h2>
        <img
          v-lazy-load
          :data-src="imageCDN('~/content/test.jpg', 300)"
          class="float-left img-responsive"
        />
        <p>
          Our Productions can help you fast track your growth and save you thousands
          in programme fees. So far our postgraduate courses have helped over
          1000 professionals across 150 countries and territories, and we’d be
          honoured to fast track you too!
        </p>
        <hr class="divider my-4 mt-5" />
        <b-row>
          <b-col class="mb-4">
            <Course
              title="Title"
              text="Content Text"
              image="~/content/test.jpg"
            />
          </b-col>
          <b-col class="mb-4">
            <Course
              title="Title"
              text="Content Text"
              image="~/content/test.jpg"
            />
          </b-col>
          <b-col class="mb-4">
            <Course
              title="Title"
              text="Content Text"
              image="~/content/test.jpg"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Course from '~/components/Shared/Course'
import util from '~/assets/js/util.js'

export default {
  components: {
    Course
  },
  methods: {
    imageCDN: (image, width) => util.imageCDN(image, width)
  }
}
</script>

<style lang="scss" scoped>
.min-w-300 {
  min-width: 300px !important;
}
h2 {
  font-weight: 400;
}
</style>
