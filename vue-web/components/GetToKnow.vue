<template>
  <section class="get-to-know-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="get-to-know-thumb mr-70 animated wow fadeInLeft animated">
            <img src="/assets/images/get-to-know-thumb.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="get-to-know-content">
            <h3 class="title">Get to know about our codesk company.</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.</p>
            <ul>
              <li><i class="fa fa-check"></i> High speed internet</li>
              <li><i class="fa fa-check"></i> Uninterruptible power supply</li>
              <li><i class="fa fa-check"></i> Fully Airconditioned rooms</li>
              <li><i class="fa fa-check"></i> Office boy service</li>
              <li><i class="fa fa-check"></i> Fully equipped kitchen</li>
            </ul>
            <nuxt-link class="main-btn main-btn-2" to="/book-a-tour">Book a tour</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="about-pattern">
      <img src="/assets/images/shape-pattern.png" alt="">
    </div>
  </section>
</template>

<script>
    export default {
        name: "GetToKnow"
    }
</script>

<style scoped>

</style>
