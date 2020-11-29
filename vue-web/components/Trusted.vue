<template>
  <div>
  <div class="trusted-area bg_cover pt-120 pb-120" style="background-image: url(/assets/images/trusted-bg.jpg);">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="trusted-item text-center">
            <h3 class="title">Trusted & comfortable space for creative people.</h3>
            <nuxt-link class="main-btn" to="/book-a-tour">Book a tour</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
    <section class="benefits-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="benefits-thumb">
              <img src="/assets/images/benefits-thumb.jpg" alt="benefits">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="benefits-content">
              <div class="benefits-title">
                <h3 class="title">Benefits of our coworking spaces.</h3>
              </div>
              <div class="faq-accordion">
                <div class="accordion-container-one">
                  <div class="ac">
                    <h4 class="ac-q accordion__title-text" tabIndex="0">1. Reserve conference rooms</h4>
                    <div class="ac-a accordion__content">
                      <p class="accordion__content-desc">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                      </p>
                    </div>
                  </div>

                  <div class="ac accordion__content">
                    <h4 class="ac-q accordion__title-text" tabIndex="0">2. Post or respond to job listings</h4>
                    <div class="ac-a">
                      <p class="accordion__content-desc">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                      </p>
                    </div>
                  </div>

                  <div class="ac">
                    <h4 class="ac-q accordion__title-text" tabIndex="0">3. Flexibility of monthly terms</h4>
                    <div class="ac-a accordion__content">
                      <p class="accordion__content-desc">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="benefits-pattern">
        <img src="/assets/images/benefits-pattern.png" alt="">
      </div>
      <div class="benefits-dot">
        <img src="/assets/images/benefits-dot.png" alt="">
      </div>
    </section>
  </div>
</template>

<script>
    export default {
      name: "Trusted",
      mounted() {
        new Accordion('.accordion-container-one');
      }
    }
</script>

<style scoped>
  .ac {
    margin-top: 10px;
    padding: 10px;
    background: #FFFFFF;
    box-sizing: border-box;
  }

  .ac>.ac-q {
    padding: 10px 30px 10px 10px;
    text-decoration: none;
    display: block;
    cursor: pointer;
    position: relative;
    margin: 0;
    color: #192437;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
  }

  .ac.is-active .ac-q {
    color: #222 !important;
  }
  .ac>.ac-q::after {
    content: '+';
    text-align: center;
    width: 15px;
    right: 10px;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    position: absolute
  }

  .ac>.ac-a {
    overflow: hidden;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease
  }

  .ac>.ac-a p {
    margin: 0;
    padding: 10px;
    color: #545764;
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
  }

  .ac.js-enabled>.ac-a {
    visibility: hidden
  }

  .ac.is-active>.ac-a {
    visibility: visible
  }

  .ac.is-active>.ac-q::after {
    content: '\2013';
    color: #222;
  }
</style>
