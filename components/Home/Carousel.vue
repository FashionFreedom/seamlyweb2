<template>
  <div>
    <b-carousel
      v-model="slide"
      :interval="20000"
      controls
      background="#153a59"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="">
        <div class="carousel-caption">
          <div class="carousel-title">
            <h1 id="hero-h1">
              Executive MBAs that Reinvigorate Your Thinking!
            </h1>
          </div>
          <div class="carousel-content">
            <p>
              In conjunction with our collaborative partner, The University of
              Gibraltar.
            </p>
            <hr class="divider my-4" />
          </div>
          <b-button :to="{ name: 'courses' }" class="carousel-button">
            View Programmes
          </b-button>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-item {
  height: 65vh;
  min-height: 400px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 150px;
  left: -4%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: left;
  width: 55%;
}
.carousel-title {
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 14.5px;
}
.carousel-content {
  font-size: 18px;
  margin-bottom: 25px;
  font-style: normal;
  font-weight: 200;
  color: #ffffff;
}
.carousel-button {
  border-radius: 0;
  background: #f0508a;
  border-color: transparent;
  font-size: 16px;
  width: 250px;
  height: 50px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  border-radius: 3px;
}
#hero-h1 {
  text-align: left;
}
@media only screen and (max-width: 375px) {
  .carousel-caption {
    width: 100%;
    text-align: center;
    left: 0;
    bottom: -105px !important;
  }
  #hero-h1 {
    text-align: center;
  }
  #content {
    margin-top: 65px;
  }
  .carousel {
    height: 500px;
  }
}
@media only screen and (max-width: 450px) {
  .carousel-caption {
    width: 100%;
    bottom: 25px;
    text-align: center;
    left: 0;
  }
  #hero-h1 {
    text-align: center;
  }
  #content {
    margin-top: 65px;
  }
}
@media only screen and (max-width: 600px) {
  .carousel-caption {
    width: 100%;
    bottom: 40px;
    text-align: center;
    left: -2%;
  }
  #hero-h1 {
    text-align: center;
  }
}
@media only screen and (max-width: 768px) {
  .carousel-caption {
    width: 100%;
    text-align: center;
    left: 0;
  }
  #hero-h1 {
    text-align: center;
  }
}
@media only screen and (min-width: 1280px) {
  .carousel-caption {
    width: 55%;
    bottom: 125px;
    text-align: left;
    left: -2%;
  }
}
@media only screen and (min-width: 1280px) {
  .carousel-caption {
    bottom: 75px;
  }
}
</style>
