<template>
  <section class="services-box-area pt-30">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-services mt-30 active">
            <i class="flaticon-wifi"></i>
            <nuxt-link to="/single-news"><h4 class="title">High speed internet</h4></nuxt-link>
            <p>There are many new variations of pasages of available text.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-services mt-30">
            <i class="flaticon-tray"></i>
            <nuxt-link to="/single-news"><h4 class="title">Fully equipped kitchen</h4></nuxt-link>
            <p>There are many new variations of pasages of available text.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-services mt-30">
            <i class="flaticon-parking"></i>
            <nuxt-link to="/single-news"><h4 class="title">Huge parking space</h4></nuxt-link>
            <p>There are many new variations of pasages of available text.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-services mt-30">
            <i class="flaticon-room"></i>
            <nuxt-link to="/single-news"><h4 class="title">Conference  rooms</h4></nuxt-link>
            <p>There are many new variations of pasages of available text.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="services-pattern">
      <img src="/assets/images/services-pattern.png" alt="">
    </div>
  </section>
</template>

<script>
    export default {
        name: "ServicesBox"
    }
</script>

<style scoped>

</style>
