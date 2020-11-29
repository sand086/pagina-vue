<template>
  <div class="play-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="play-thumb">
            <img src="/assets/images/play-thumb.jpg" alt="play">
            <a class="main-btn videoBox" href="https://www.youtube.com/watch?v=cSLAO7zxS2M"><i class="fa fa-play"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "VideoArea",
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
