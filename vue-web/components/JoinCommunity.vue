<template>
  <section class="join-community-area" v-observe-visibility="onVisibilityChange">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="join-community-content">
            <h3 class="title animated wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">Join a community of early stage startups.</h3>
            <p class="animated wow fadeInLeft">Lorem ipsum is simply free text dolor sit amett adipiscing elit. When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <nuxt-link class="main-btn animated wow fadeInLeft" to="/about">Read more</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="join-community-counter">
      <div class="item">
        <h3 class="title counter"><countTo :startVal='0' :endVal='startCounter ? 880 : 0' :duration='3000'></countTo></h3>
        <p>Creative people space is available.</p>
      </div>
      <div class="item item-2">
        <h3 class="title"><span class="counter"><countTo :startVal='0' :endVal='startCounter ? 70 : 0' :duration='3000'></countTo></span>+</h3>
        <p>Conference & meeting rooms available.</p>
      </div>
    </div>
    <div class="community-logo">
      <img src="/assets/images/community-logo.png" alt="">
    </div>
  </section>
</template>

<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'
  export default {
    name: "JoinCommunity",
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
