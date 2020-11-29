<template>
  <section class="pricing-area">
    <div class="pricing-title-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="pricng-title text-center">
              <h3 class="title">Choose pricing plans for space</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="pricing-pattern">
        <img src="/assets/images/pricing-pattern.png" alt="">
      </div>
      <div class="pricing-logo">
        <img src="/assets/images/pricing-logo.png" alt="">
      </div>
    </div>
    <div class="pricing-item-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="pricing-item text-center">
              <span>Basic pack</span>
              <h3 class="title">$20.00</h3>
              <div class="list">
                <ul>
                  <li><span>High speed internet</span> <i class="fa fa-check"></i></li>
                  <li><span>Free parking space</span> <i class="fa fa-check"></i></li>
                  <li><span>Drinks & coffee</span> <i class="fa fa-check"></i></li>
                  <li><span>Full access</span> <i class="fa fa-check"></i></li>
                </ul>
              </div>
              <nuxt-link class="main-btn main-btn-2" to="/book-a-tour">Book space</nuxt-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="pricing-item text-center">
              <span>Standard pack</span>
              <h3 class="title">$40.00</h3>
              <div class="list">
                <ul>
                  <li><span>High speed internet</span> <i class="fa fa-check"></i></li>
                  <li><span>Free parking space</span> <i class="fa fa-check"></i></li>
                  <li><span>Drinks & coffee</span> <i class="fa fa-check"></i></li>
                  <li><span>Full access</span> <i class="fa fa-check"></i></li>
                </ul>
              </div>
              <nuxt-link class="main-btn main-btn-2" to="/book-a-tour">Book space</nuxt-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="pricing-item text-center">
              <span>Ultimate  pack</span>
              <h3 class="title">$90.00</h3>
              <div class="list">
                <ul>
                  <li><span>High speed internet</span> <i class="fa fa-check"></i></li>
                  <li><span>Free parking space</span> <i class="fa fa-check"></i></li>
                  <li><span>Drinks & coffee</span> <i class="fa fa-check"></i></li>
                  <li><span>Full access</span> <i class="fa fa-check"></i></li>
                </ul>
              </div>
              <nuxt-link class="main-btn main-btn-2" to="/book-a-tour">Book space</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="pricing-dot">
        <img src="/assets/images/pricing-dot.png" alt="pricing">
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Pricing"
    }
</script>

<style scoped>

</style>
