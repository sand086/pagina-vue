<template>
  <section class="write-massage-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="write-massage-content">
            <div class="write-massage-title">
              <h3 class="title">Write us message.</h3>
            </div>
            <div class="write-massage-input">
              <form action="#">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input type="text" placeholder="Name">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input type="text" placeholder="Email">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input type="text" placeholder="Phone">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box mt-10">
                      <input type="text" placeholder="Subject">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-box mt-10">
                      <textarea name="#" id="#" cols="30" rows="10" placeholder="Message"></textarea>
                      <button class="main-btn main-btn-2">Send message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="write-massage-images animated wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
            <div class="thumb d-flex justify-content-between">
              <div class="item-1">
                <img src="/assets/images/write-massage-1.jpg" alt="">
              </div>
              <div class="item-2">
                <img src="/assets/images/write-massage-2.jpg" alt="">
              </div>
            </div>
            <div class="thumb mt-15">
              <img src="/assets/images/write-massage-3.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-pattern">
      <img src="/assets/images/we-know-line.png" alt="">
    </div>
  </section>
</template>

<script>
    export default {
        name: "WriteMessage"
    }
</script>

<style scoped>

</style>
