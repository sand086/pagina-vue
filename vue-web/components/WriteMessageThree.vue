<template>
  <section class="write-massage-area pb-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="write-massage-content">
            <div class="write-massage-title text-center">
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
                    <div class="input-box mt-10 text-center">
                      <textarea name="#" id="#" cols="30" rows="10" placeholder="Message"></textarea>
                      <button class="main-btn main-btn-2">Send message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "WriteMessageThree"
    }
</script>

<style scoped>

</style>
