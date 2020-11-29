<template>
  <section class="news-area pb-150">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="news-title text-center">
            <h3 class="title">News & articles.</h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-7">
          <div class="mt-30">
            <div class="news-item bg_cover" style="background-image: url(/assets/images/news-item-bg.jpg);">
              <div class="item">
                <img src="/assets/images/news-user-1.jpg" alt="">
                <ul>
                  <li><i class="fa fa-user-o"></i> by admin</li>
                  <li><i class="fa fa-comments-o"></i> 2 comments</li>
                </ul>
              </div>
              <h3 class="title">Why your business absolutely needs a virtual office</h3>
              <nuxt-link to="/single-news.html"><i class="flaticon-right-arrow"></i></nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-7">
          <div class="mt-30">
            <div class="news-item active bg_cover" style="background-image: url(/assets/images/news-item-bg.jpg);">
              <div class="item">
                <img src="/assets/images/news-user-2.jpg" alt="">
                <ul>
                  <li><i class="fa fa-user-o"></i> by admin</li>
                  <li><i class="fa fa-comments-o"></i> 2 comments</li>
                </ul>
              </div>
              <h3 class="title">Why your business absolutely needs a virtual office</h3>
              <nuxt-link to="/single-news"><i class="flaticon-right-arrow"></i></nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-7">
          <div class="mt-30">
            <div class="news-item bg_cover" style="background-image: url(/assets/images/news-item-bg.jpg);">
              <div class="item">
                <img src="/assets/images/news-user-3.jpg" alt="">
                <ul>
                  <li><i class="fa fa-user-o"></i> by admin</li>
                  <li><i class="fa fa-comments-o"></i> 2 comments</li>
                </ul>
              </div>
              <h3 class="title">Why your business absolutely needs a virtual office</h3>
              <nuxt-link to="/single-news"><i class="flaticon-right-arrow"></i></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-pattern">
      <img src="/assets/images/shape-pattern.png" alt="">
    </div>
  </section>
</template>

<script>
    export default {
        name: "Blog"
    }
</script>

<style scoped>

</style>
