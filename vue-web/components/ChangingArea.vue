<template>
  <section class="codesk-changing-area bg_cover" style="background-image: url(/assets/images/codesk-changing-bg.jpg);">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="codesk-changing-text">
            <h3 class="title">Codesk is changing the way people and companies work.</h3>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="codesk-changing-play text-left text-lg-right">
            <a class="main-btn video-popup videoBox" href="https://www.youtube.com/watch?v=_9MEYFNyilQ"><i class="fa fa-play"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "ChangingArea",
      mounted() {
        new GLightbox({
          selector: '.videoBox',
          touchNavigation: true,
          loop: true,
          autoplayVideos: true
        });
      }
    }
</script>

<style scoped>

</style>
