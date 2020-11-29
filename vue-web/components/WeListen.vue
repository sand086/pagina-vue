<template>
  <section class="we-listen-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="we-listen-content">
            <h3 class="title">We listen and work together.</h3>
            <p>There are many variations of passages the majority have suffered alteration in some fo injected humour.</p>
            <div class="row">
              <div class="col-lg-6">
                <div class="thumb mt-30">
                  <img src="/assets/images/listed-item-1.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="thumb mt-30">
                  <img src="/assets/images/listed-item-2.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
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
  </section>
</template>


<script>
  export default {
    name: "WeListen",
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
