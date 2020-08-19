<template>
  <section class="page-section pt-5 pb-5">
    <b-container>
      <h2 class="text-center text-muted mb-5">Testimonials</h2>
      <p>
        Nothing worthwhile in life comes easy! And our programmes are no
        exception! However, those who are willing to put in the time will reap
        the largest of rewards. You'll need to commit to a minimum of an hour a
        day. Our most successful students on average spend 2 hours a day
        dedicated to their studies and as a result earn themselves a credential
        that sends a very clear signal to their market and industry! Here’s what
        our past students have to say.
      </p>
      <hr class="divider my-4 mt-5" />
      <b-row>
        <b-col class="testimonial-card">
          <Testimonial
            name="Testimonial Title"
            text="Testimonial Content"
            image="~/content/learna/images/uk-flag-v1.svg"
          >
          </Testimonial>
        </b-col>

        <b-col class="testimonial-card">
          <Testimonial
            name="Testimonial Title"
            text="Testimonial Content"
            image="~/content/learna/images/india-flag-v2.svg"
          >
          </Testimonial>
        </b-col>
        <b-col class="testimonial-card">
          <Testimonial
            name="Testimonial Title"
            text="Testimonial Content"
            image="~/content/test.jpg"
          >
          </Testimonial>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Testimonial from '~/components/Home/Testimonial'
export default {
  components: {
    Testimonial
  }
}
</script>

<style lang="scss" scoped>
.min-w-360 {
  min-width: 315px;
}
.testimonial-card {
  margin-top: 1.5rem;
}

@media only screen and (max-width: 768px) {
  .testimonial-card {
    margin-bottom: 1.5rem !important;
  }
}
.card-img-top {
  width: 100%;
  height: auto;
}
h2 {
  font-weight: 400;
}
</style>
