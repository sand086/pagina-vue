<template>
  <section class="gallery-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="gallery-title text-center">
            <h3 class="title">Our photo gallery</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0">
      <div class="gallery-itmes">
        <div class="row no-gutters gallery-active">
            <div class="col-lg-3">
            <div class="gallery-thumb">
              <img src="/assets/images/gallery-1.jpg" alt="gallery">
              <a class="main-btn image-popup galleryOne" href="/assets/images/gallery-1.jpg"><i class="flaticon-plus"></i></a>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="gallery-thumb">
              <img src="/assets/images/gallery-2.jpg" alt="gallery">
              <a class="main-btn image-popup galleryOne" href="/assets/images/gallery-2.jpg"><i class="flaticon-plus "></i></a>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="gallery-thumb">
              <img src="/assets/images/gallery-3.jpg" alt="gallery">
              <a class="main-btn image-popup galleryOne" href="/assets/images/gallery-3.jpg"><i class="flaticon-plus"></i></a>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="gallery-thumb">
              <img src="/assets/images/gallery-4.jpg" alt="gallery">
              <a class="main-btn image-popup galleryOne" href="/assets/images/gallery-4.jpg"><i class="flaticon-plus"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
  name: "Gallery",
  mounted() {
    new GLightbox({
      selector: '.galleryOne',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  }

  }
</script>
<style scoped>

</style>
