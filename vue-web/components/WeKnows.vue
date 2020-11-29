<template>
  <section class="we-knows-area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="we-knows-content">
            <h3 class="title">We known for having cool workspaces filled with amenities.</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of lorem Ipsum.</p>
            <img src="/assets/images/we-know-thumb.jpg" alt="thumb">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="we-knows-center mt-10 animated wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
            <div class="we-knows-item d-block d-sm-flex">
              <div class="we-knows-item-content">
                <h4 class="title">Explore our standard private offices</h4>
                <nuxt-link class="main-btn" to="/book-a-tour">More <i class="flaticon-right-arrow"></i></nuxt-link>
              </div>
              <div class="we-knows-item-thumb">
                <img src="/assets/images/we-know-item-1.jpg" alt="">
              </div>
            </div>
            <div class="we-knows-item item-2 d-block d-sm-flex mt-10">
              <div class="we-knows-item-thumb">
                <img src="/assets/images/we-know-item-2.jpg" alt="">
              </div>
              <div class="we-knows-item-content">
                <h4 class="title">Rent a conference & meeting rooms</h4>
                <nuxt-link class="main-btn" to="/book-a-tour">More <i class="flaticon-right-arrow"></i></nuxt-link>
              </div>
            </div>
            <div class="we-know-logo">
              <img src="/assets/images/we-know-logo.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="we-know-line">
      <img src="assets/images/we-know-line.png" alt="line">
    </div>
  </section>
</template>

<script>
    export default {
        name: "WeKnows"
    }
</script>

<style scoped>

</style>
