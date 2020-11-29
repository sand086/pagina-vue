<template>
  <section class="space-to-make-area pt-120 pb-120">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="space-to-make-thumb animated wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
            <img src="/assets/images/space-to-make-thumb.jpg" alt="">
            <div class="thumb-content">
              <span>Over 50 <br> locations <br> worldwide</span>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-10">
          <div class="space-to-make-content">
            <h3 class="title">Space to make your greatest impact.</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div class="row">
              <div class="col-sm-6">
                <div class="space-to-make-item mt-30">
                  <a href="#">
                    <i class="flaticon-workspace"></i>
                    <span>Flexible private offices</span>
                  </a>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="space-to-make-item mt-30">
                  <a href="#">
                    <i class="flaticon-meeting"></i>
                    <span>Fully custom spaces</span>
                  </a>
                </div>
              </div>
            </div>
            <p class="text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <nuxt-link class="main-btn main-btn-2" to="/book-a-tour">Book a tour</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-pattern">
      <img src="/assets/images/shape-pattern.png" alt="">
    </div>
    <div class="shape-pattern-2">
      <img src="/assets/images/we-know-line.png" alt="">
    </div>
  </section>
</template>

<script>
    export default {
        name: "SpaceToMake"
    }
</script>

<style scoped>

</style>
