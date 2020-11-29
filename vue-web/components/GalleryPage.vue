<template>
  <div class="gallery-area gallery-page">
    <div class="container">
      <div class="gallery-itmes">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="gallery-thumb mt-30">
              <img src="/assets/images/gallery-item-1.jpg" alt="gallery">
              <a class="main-btn image-popup galleryTwo" href="/assets/images/gallery-item-1.jpg"><i class="flaticon-plus"></i></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="gallery-thumb mt-30">
              <img src="/assets/images/gallery-item-2.jpg" alt="gallery">
              <a class="main-btn image-popup galleryTwo" href="/assets/images/gallery-item-2.jpg"><i class="flaticon-plus"></i></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="gallery-thumb mt-30">
              <img src="/assets/images/gallery-item-3.jpg" alt="gallery">
              <a class="main-btn image-popup galleryTwo" href="/assets/images/gallery-item-3.jpg"><i class="flaticon-plus"></i></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="gallery-thumb mt-30">
              <img src="/assets/images/gallery-item-4.jpg" alt="gallery">
              <a class="main-btn image-popup galleryTwo" href="/assets/images/gallery-item-4.jpg"><i class="flaticon-plus"></i></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="gallery-thumb mt-30">
              <img src="/assets/images/gallery-item-5.jpg" alt="gallery">
              <a class="main-btn image-popup galleryTwo" href="/assets/images/gallery-item-5.jpg"><i class="flaticon-plus"></i></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="gallery-thumb mt-30">
              <img src="/assets/images/gallery-item-6.jpg" alt="gallery">
              <a class="main-btn image-popup galleryTwo" href="/assets/images/gallery-item-6.jpg"><i class="flaticon-plus"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "GalleryPage",
      mounted() {
        new GLightbox({
          selector: '.galleryTwo',
          touchNavigation: true,
          loop: true,
          autoplayVideos: true
        });
      }
    }
</script>

<style scoped>

</style>
