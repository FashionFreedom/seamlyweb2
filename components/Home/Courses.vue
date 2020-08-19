<template>
  <div id="courses">
    <section class="page-section pt-5">
      <b-container>
        <h2 id="programmes" class="text-center text-muted mb-5">
          Our Programmes
        </h2>
        <img
          v-lazy-load
          :data-src="imageCDN('~/content/test.jpg', 300)"
          class="float-left img-responsive mr-5"
        />
        <p>
          In conjunction with our collaborative partner, the University of
          Gibraltar.
        </p>
        <p>
          Our Executive MBAs are 18 month online programmes for mid-level
          managers who want to step up! Professional progression requires
          clarity, vision and the ability to execute consistently on the right
          strategies. Without a roadmap or guidance, the process can be
          overwhelming.
        </p>
        <p>
          Our EMBAs can help you fast track your growth and save you thousands
          in programme fees. So far our postgraduate courses have helped over
          1000 professionals across 150 countries and territories, and we’d be
          honoured to fast track you too!
        </p>
        <hr class="divider my-4 mt-5" />
        <b-row>
          <b-col class="mb-4">
            <Course
              title="Executive MBA in Financial Management"
              slug="executive-mba-in-financial-management"
              text="Our Executive MBA in Financial Management offers business leaders and executives a future-proof and challenging programme of study, which will rapidly expand your academic understanding and practice in financial management."
              image="~/content/learna/courses/financial-management-mba-v1.jpg"
            />
          </b-col>
          <b-col class="mb-4">
            <Course
              title="Executive MBA in Marketing"
              slug="executive-mba-in-marketing"
              text="Marketing is like a living organism, it never stops evolving. Our Executive MBA in Marketing develops your understanding of marketing in this contemporary and dynamic world - without putting pause on your career."
              image="~/content/learna/courses/marketing-management-mba-v1.jpg"
            />
          </b-col>
          <b-col class="mb-4">
            <Course
              title="Executive MBA in Healthcare Management"
              slug="executive-mba-in-healthcare-management"
              text="Change, development and advancement in healthcare is inevitable and requires independent, conscientious and intuitive leaders. Join our Executive MBA in Healthcare Management and master the complexities of healthcare business."
              image="~/content/learna/courses/healthcare-management-v1.png"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col class="mb-4">
            <Course
              title="Executive MBA in Hospitality and Tourism"
              slug="executive-mba-in-hospitality-and-tourism"
              text="Our Executive MBA in Hospitality and Tourism has been developed for aspiring industry leaders. Combining academic study and real-world business experience to help you develop the skills needed to carve a successful career."
              image="~/content/learna/courses/hospitality-and-tourism-mba-v1.jpg"
            />
          </b-col>
          <b-col class="mb-4">
            <Course
              title="Executive MBA"
              slug="executive-mba"
              text="The global business environment is constantly evolving. Our Executive MBA will equip you with the knowledge, skills and confidence to tackle leadership positions in complex, ever-changing organisations."
              image="~/content/learna/courses/executive-mba-v1.jpg"
            />
          </b-col>
          <b-col class="mb-4">
            <Course
              title="Executive MBA in Entrepreneurship"
              slug="executive-mba-in-entrepreneurship"
              text="Want to lead in entrepreurship within an organisation? Our Executive MBA in Entrepreneurship equips aspiring entrepreneurs with the skills and knowledge needed for successful business growth."
              image="~/content/learna/courses/entrepreneurship-mba-v1.jpg"
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
