<template>
  <div>
  <header class="header-area">
    <div class="header-top-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="header-top">
              <ul>
                <li><a href="mailto:contacto@ipn308.mx"><i class="flaticon-message"></i> contacto@ipn308.mx</a></li>
                <li>
                  <a href="tel:55212638"><i class="flaticon-phone-call"></i> 55-21-26-38</a>
                </li>
                <li><a href="#"><i class="flaticon-placeholder"></i> Palma Norte 308, Alc. Cuauhtémoc, Col. Centro, Ciudad de México, 06010</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="`main-header ${sticky ? 'sticky' : ''}`">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-header-item d-flex justify-content-between align-items-center">
              <div class="main-header-menus  d-flex">
                <div class="header-logo">
                  <a href="/"><img src="/assets/images/logo.png" alt="logo"></a>
                </div>
                <div class="header-menu d-none d-lg-block">
                  <ul>
                    <li>
                      <a class="active" href="#">Inicio <i class="fa fa-angle-down"></i></a>
                    </li>
                    <li>
                      <nuxt-link to="/about">Oficinas disponibles</nuxt-link>
                    </li>
                    <li>
                      <a href="#">Servicios  <i class="fa fa-angle-down"></i></a>
                    </li>
                    <li>
                      <a href="#">Galería  <i class="fa fa-angle-down"></i></a>
                    </li>
                    <li><nuxt-link to="/contact">Contacto</nuxt-link></li>
                  </ul>
                </div>
              </div>
              <div class="header-social d-flex align-items-center">
                <ul class="d-none d-lg-block">
                  <li><a href="$"><i class="fa fa-facebook-square"></i></a></li>
                  <li><a href="$"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="$"><i class="fa fa-instagram"></i></a></li>
                  <li><a href="$"><i class="fa fa-dribbble"></i></a></li>
                </ul>
                <div @click="mobileToggle = !mobileToggle" class="toggle-btn ml-30 canvas_open d-lg-none d-block">
                  <i class="fa fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div :class="`off_canvars_overlay ${mobileToggle ? 'active' : ''}`"></div>
  <div class="offcanvas_menu">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div :class="`offcanvas_menu_wrapper ${mobileToggle ? 'active' : ''}`">
            <div class="canvas_close">
              <a @click="mobileToggle = !mobileToggle" href="javascript:void(0)"><i class="fa fa-times"></i></a>
            </div>
            <div class="offcanvas-social">
              <ul class="text-center">
                <li><a href="$"><i class="fa fa-facebook-square"></i></a></li>
                <li><a href="$"><i class="fa fa-twitter"></i></a></li>
                <li><a href="$"><i class="fa fa-instagram"></i></a></li>
                <li><a href="$"><i class="fa fa-dribbble"></i></a></li>
              </ul>
            </div>
            <div id="menu" class="text-left ">
              <ul class="offcanvas_main_menu">
                <li">
                  <a href="#">Inicio</a>
                </li>
                <li>
                  <a href="#"">Oficinas disponibles</a>
                </li>
                <li>
                  <nuxt-link to="/about">Galería</nuxt-link>
                </li>
                <li class="menu-item-has-children active">
                  <nuxt-link to="/contact">Contacto</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="offcanvas_footer">
              <span><a href="mailto:contacto@ipn308.mx"><i class="fa fa-envelope-o"></i> contacto@ipn308.mx</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
  export default {
    name: "Nav",
    data(){
      return {
        sticky: false,
        mobileToggle: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {

      handleScroll() {
        if (window.scrollY > 70) {
          this.sticky = true
        } else if (window.scrollY < 70) {
          this.sticky = false
        }
      },
    }
  }
</script>

<style scoped>

</style>
