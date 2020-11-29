<template>
  <section class="services-area pt-90 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="services-title">
            <h3 class="title">What we are offering to creative people.</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-services mt-30">
            <i class="flaticon-wifi"></i>
            <nuxt-link to="/single-event"><h4 class="title">High speed internet</h4></nuxt-link>
            <p>There are many new variations of pasages of available text.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-services mt-30">
            <i class="flaticon-tray"></i>
            <nuxt-link to="/single-event"><h4 class="title">Fully equipped kitchen</h4></nuxt-link>
            <p>There are many new variations of pasages of available text.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-services mt-30">
            <i class="flaticon-parking"></i>
            <nuxt-link to="/single-event"><h4 class="title">Huge parking space</h4></nuxt-link>
            <p>There are many new variations of pasages of available text.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-services mt-30">
            <i class="flaticon-room"></i>
            <nuxt-link to="/single-event"><h4 class="title">Conference  rooms</h4></nuxt-link>
            <p>There are many new variations of pasages of available text.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-services mt-30">
            <i class="flaticon-cctv"></i>
            <nuxt-link to="/single-event"><h4 class="title">Full security cameras</h4></nuxt-link>
            <p>There are many new variations of pasages of available text.</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="services-book mt-30">
            <h3 class="title">Book a free day tour to experience our benefits</h3>
            <nuxt-link class="main-btn main-btn-2" to="/book-a-tour">Book a tour</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="services-pattern">
      <img src="/assets/images/services-pattern.png" alt="pattern">
    </div>
    <div class="services-dot">
      <img src="/assets/images/services-dot.png" alt="pattern">
    </div>
  </section>
</template>

<script>
    export default {
        name: "Services"
    }
</script>

<style scoped>

</style>
