<template>
  <section class="news-2-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="news-title text-center">
            <h3 class="title">News & articles.</h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-7 col-sm-9">
          <div class="news-item mt-30">
            <div class="news-thumb">
              <img src="/assets/images/news-1.jpg" alt="news">
            </div>
            <div class="news-content">
              <ul>
                <li><i class="fa fa-user-o"></i> by admin</li>
                <li><i class="fa fa-comments-o"></i> 2 comments</li>
              </ul>
              <h3 class="title">Why your business absolutely needs <br> a virtual office</h3>
              <nuxt-link to="/single-news"><i class="flaticon-right-arrow"></i></nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-7 col-sm-9">
          <div class="news-item mt-30">
            <div class="news-thumb">
              <img src="/assets/images/news-2.jpg" alt="news">
            </div>
            <div class="news-content">
              <ul>
                <li><i class="fa fa-user-o"></i> by admin</li>
                <li><i class="fa fa-comments-o"></i> 2 comments</li>
              </ul>
              <h3 class="title">Why your business absolutely needs <br> a virtual office</h3>
              <nuxt-link to="/single-news"><i class="flaticon-right-arrow"></i></nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-7 col-sm-9">
          <div class="news-item mt-30">
            <div class="news-thumb">
              <img src="/assets/images/news-3.jpg" alt="news">
            </div>
            <div class="news-content">
              <ul>
                <li><i class="fa fa-user-o"></i> by admin</li>
                <li><i class="fa fa-comments-o"></i> 2 comments</li>
              </ul>
              <h3 class="title">Why your business absolutely needs <br> a virtual office</h3>
              <nuxt-link to="/single-news"><i class="flaticon-right-arrow"></i></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="news-pattern">
      <img src="/assets/images/fun-facts-pattern.png" alt="">
    </div>
  </section>
</template>

<script>
    export default {
        name: "BlogTwo"
    }
</script>

<style scoped>

</style>
