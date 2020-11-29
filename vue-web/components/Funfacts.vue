<template>
  <div class="fun-facts-area pt-120 pb-120" v-observe-visibility="onVisibilityChange">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-8">
          <div class="fun-facts-item text-center animated wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
            <h3 class="title counter" ><countTo :startVal='0' :endVal='startCounter ? 880 : 0' :duration='3000'></countTo></h3>
            <span>Creative people space is available.</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-8">
          <div class="fun-facts-item active text-center animated wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
            <h3 class="title"><span class="counter"><countTo :startVal='0' :endVal='startCounter ? 70 : 0' :duration='3000'></countTo></span>+</h3>
            <span>Conference & meeting rooms available.</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-8">
          <div class="fun-facts-item text-center animated wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
            <h3 class="title counter"><countTo :startVal='0' :endVal='startCounter ? 440 : 0' :duration='3000'></countTo></h3>
            <span>Seats are already busy with freelancers.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="fun-facts-pattern">
      <img src="/assets/images/fun-facts-pattern.png" alt="">
    </div>
    <div class="fun-dots">
      <img src="/assets/images/fun-dots.png" alt="dots">
    </div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'
  export default {
    name: "Funfacts",
    components: { countTo },
    directives: {
      ObserveVisibility
    },
    data() {
      return{
        startCounter: false
      }
    },
    methods: {
      onVisibilityChange (isVisible) {
        if (isVisible){
          this.startCounter = true;
        }

      },
    }
  }
</script>

<style scoped>

</style>
