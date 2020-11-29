<template>
  <section class="banner-slide">
    <VueSlickCarousel v-bind="settings">
    <div class="banner-area bg_cover slide-bg1 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-slide-number">
              <span>01</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <div class="banner-content">
              <span data-animation="fadeInDown" data-delay=".1s"><img src="/assets/images/banner-icon.png" alt=""> Welcome to codesk</span>
              <h1 data-animation="fadeInLeft" data-delay=".5s" class="title">Comfortable coworking space.</h1>
              <nuxt-link data-animation="fadeInLeft" data-delay="1s" class="main-btn" to="/book-a-tour">Book a tour</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-social">
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Linkedin</a></li>
        </ul>
      </div>
    </div>
    <div class="banner-area bg_cover slide-bg2 d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-slide-number">
              <span>02</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <div class="banner-content">
              <span data-animation="fadeInDown" data-delay=".1s"><img src="/assets/images/banner-icon.png" alt=""> Welcome to codesk</span>
              <h1 data-animation="fadeInLeft" data-delay=".5s" class="title">Comfortable coworking space.</h1>
              <nuxt-link data-animation="fadeInLeft" data-delay="1s" class="main-btn" to="/book-a-tour">Book a tour</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-social">
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Linkedin</a></li>
        </ul>
      </div>
    </div>
    </VueSlickCarousel>
  </section>
</template>


<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  export default {
    name: "Slider",
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
