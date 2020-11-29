<template>
    <div>
      <section class="footer-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8">
              <div class="footer-about mt-30">
                <div class="logo">
                  <a href="#"><img src="/assets/images/logo-2.png" alt="logo"></a>
                </div>
                <p>Codesk is a premium wordpress theme for coworking space, freelancers, creatives and a wide range of other businesses.</p>
                <ul>
                  <li><a href="mailto:needhelp@codesk.com">needhelp@codesk.com</a></li>
                  <li><a href="tel:7778880000">777 888 0000</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="footer-list mt-30">
                <h4 class="title">Company</h4>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Latest events</a></li>
                  <li><a href="#">Our services</a></li>
                  <li><a href="#">News & articles</a></li>
                  <li><a href="#">Contact us</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-list pl-35 mt-30">
                <h4 class="title">Explore</h4>
                <ul>
                  <li><a href="#">Our history</a></li>
                  <li><a href="#">Help & support</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Terms & condition</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-address mt-30">
                <h3 class="title">Address</h3>
                <p>20 Broklyn street, New york. United states of america</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14612.97540392891!2d90.497437!3d23.70298445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1590471441805!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <span><i class="fa fa-map-marker"></i> Find us on Map</span>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="footer-copyright d-block d-md-flex justify-content-between align-items-center">
                  <p>© Copyright 2020 by Layerdrops.com</p>
                  <ul>
                    <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-pattern">
          <img src="/assets/images/footer-pattern.png" alt="">
        </div>
        <div class="footer-logo">
          <img src="/assets/images/footer-logo.png" alt="">
        </div>
      </section>

      <div class="go-top-area">
        <div class="go-top-wrap">
          <div class="go-top-btn-wrap">
            <div @click="scrollTop" :class="`go-top go-top-btn ${scrollBtn ? 'active' : ''}`">
              <i class="fa fa-angle-double-up"></i>
              <i class="fa fa-angle-double-up"></i>
            </div>
          </div>
        </div>
      </div>

    </div>



</template>

<script>
  export default {
    name: "Footer",
    data(){
      return {
        scrollBtn: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },

    methods: {

      handleScroll () {

        if (window.scrollY > 70) {
          this.scrollBtn = true
        }
        else if (window.scrollY < 70) {
          this.scrollBtn = false
        }
      },

      scrollTop () {
        window.scrollTo(0, 0);
      }

    }
  }
</script>

<style scoped>

</style>
