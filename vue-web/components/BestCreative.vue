<template>
  <section class="best-creative-area" v-observe-visibility="onVisibilityChange">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="best-creative-bg">
            <div class="row">
              <div class="col-lg-7">
                <div class="best-creative-content">
                  <h3 class="title">Best creative working environments that suits your business.</h3>
                  <p>Sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec magna neulla. Lorem ipsum simply dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="best-creative-list">
                  <div class="best-creative-seats">
                    <i class="flaticon-computer"></i>
                    <h3 class="title counter"><countTo :startVal='0' :endVal='startCounter ? 37400 : 0' :duration='3000'></countTo></h3>
                    <p>Total seats are available</p>
                    <span>480 sq ft coworking space</span>
                  </div>
                  <div class="best-creative-list-item">
                    <ul>
                      <li><i class="fa fa-check"></i>High speed internet</li>
                      <li><i class="fa fa-check"></i>Uninterruptible power supply</li>
                      <li><i class="fa fa-check"></i>Fully Airconditioned rooms</li>
                      <li><i class="fa fa-check"></i>Office boy service</li>
                      <li><i class="fa fa-check"></i>Fully equipped kitchen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'
  export default {
    name: "BestCreative",
    components: { countTo },
    directives: {
      ObserveVisibility
    },
    data() {
      return{
        startCounter: false
      }
    },
    methods: {
      onVisibilityChange (isVisible) {
        if (isVisible){
          this.startCounter = true;
        }

      },
    }
  }
</script>

<style scoped>

</style>
