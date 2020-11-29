<template>
  <div class="banner-slide-3">
    <VueSlickCarousel v-bind="settings">
    <div class="banner-3-area bg_cover slide-bg5 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="banner-content">
              <span data-animation="fadeInDown" data-delay=".5s"><img src="/assets/images/banner-icon.png" alt="logo"> Book your tour today</span>
              <h1 data-animation="fadeInLeft" data-delay="1.5s" class="title">Biggest coworking space.</h1>
              <nuxt-link data-animation="fadeInUp" data-delay=".5s" class="main-btn main-btn-2" to="/book-a-tour">Book a tour</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-line">
        <img src="assets/images/banner-line.png" alt="line">
      </div>
      <div class="banner-dot">
        <img src="assets/images/banner-dot.png" alt="line">
      </div>
      <div class="banner-thumb">
        <img src="assets/images/banner-thumb.png" alt="line">
      </div>
    </div>
    <div class="banner-3-area bg_cover slide-bg6 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="banner-content">
              <span data-animation="fadeInDown" data-delay=".5s"><img src="/assets/images/banner-icon.png" alt="logo"> Book your tour today</span>
              <h1 data-animation="fadeInLeft" data-delay="1.5s" class="title">Biggest coworking space.</h1>
              <nuxt-link class="main-btn main-btn-2" to="/book-a-tour">Book a tour</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-line">
        <img src="/assets/images/banner-line.png" alt="line">
      </div>
      <div class="banner-dot">
        <img src="/assets/images/banner-dot.png" alt="line">
      </div>
      <div class="banner-thumb">
        <img src="/assets/images/banner-thumb.png" alt="line">
      </div>
    </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  export default {
    name: "SliderThree",
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
          arrows: false,
          autoplay: true
        },
      }
    },
  }
</script>

<style scoped>

</style>
