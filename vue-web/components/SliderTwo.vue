<template>
  <section class="banner-slide banner-slide-2">
    <VueSlickCarousel v-bind="settings">
    <div class="banner-area bg_cover slide-bg3 d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="banner-content text-center">
              <h1 data-animation="fadeInDown" data-delay=".5s" class="title">Big conference <span>&</span> meeting rooms</h1>
              <p data-animation="fadeInLeft" data-delay=".5s">Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt, enim lorem scelerisque massa, vel ultricies.</p>
              <nuxt-link data-animation="fadeInUp" data-delay="1s" class="main-btn" to="/single-news">Book a tour</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-social d-none d-md-block">
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Linkedin</a></li>
        </ul>
      </div>
      <div class="banner-logo">
        <img src="/assets/images/banner-logo.png" alt="">
      </div>
    </div>
    <div class="banner-area bg_cover slide-bg4 d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="banner-content text-center">
              <h1 data-animation="fadeInDown" data-delay=".5s" class="title">Big conference <span>&</span> meeting rooms</h1>
              <p data-animation="fadeInLeft" data-delay=".5s">Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt, enim lorem scelerisque massa, vel ultricies.</p>
              <nuxt-link data-animation="fadeInUp" data-delay="1s" class="main-btn" to="/single-news">Book a tour</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-social d-none d-md-block">
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Linkedin</a></li>
        </ul>
      </div>
      <div class="banner-logo">
        <img src="/assets/images/banner-logo.png" alt="">
      </div>
    </div>
    </VueSlickCarousel>
  </section>
</template>


<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  export default {
    name: "SliderTwo",
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
