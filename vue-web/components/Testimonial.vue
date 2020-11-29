<template>
  <div>
    <div class="testimonial-title-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="testimonial-title text-center">
              <h2 class="title">What they are saying.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="testimonial-area">
      <div class="container">
        <div class="row testimonial-active">
          <swiper :options="swiperOptions">
            <swiper-slide>
            <div class="testimonial-item text-center">
              <p>I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.</p>
              <h4 class="title">Jessica rose</h4>
              <span>Freelancer</span>
              <img src="/assets/images/testimonial-1.jpg" alt="testimonial">
              <div class="icon">
                <img src="/assets/images/quote-icon.png" alt="">
              </div>
            </div>
              </swiper-slide>
            <swiper-slide>
            <div class="testimonial-item text-center">
              <p>I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.</p>
              <h4 class="title">Kevin martin</h4>
              <span>CEO</span>
              <img src="/assets/images/testimonial-2.jpg" alt="testimonial">
              <div class="icon">
                <img src="/assets/images/quote-icon.png" alt="">
              </div>
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="testimonial-item text-center">
              <p>I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.</p>
              <h4 class="title">Sarah albert</h4>
              <span>Developer</span>
              <img src="/assets/images/testimonial-3.jpg" alt="testimonial">
              <div class="icon">
                <img src="/assets/images/quote-icon.png" alt="">
              </div>
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="testimonial-item text-center">
              <p>I was impresed by the moling services, not lorem ipsum is simply free text of used by refreshing. Neque porro este qui dolorem ipsum quia.</p>
              <h4 class="title">Kevin martin</h4>
              <span>CEO</span>
              <img src="/assets/images/testimonial-2.jpg" alt="testimonial">
              <div class="icon">
                <img src="/assets/images/quote-icon.png" alt="">
              </div>
            </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="testimonial-pattern">
        <img src="assets/images/testimonial-pattern.png" alt="">
      </div>
    </section>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "Testimonial",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView : 3,
          loop: true,
          speed: 1000,
          spaceBetween : 30,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          // Responsive breakpoints
          breakpoints: {
            1024:{
              slidesPerView : 3
            },
            768:{
              slidesPerView : 2
            },
            640:{
              slidesPerView : 1
            },
            320:{
              slidesPerView : 1
            }
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
