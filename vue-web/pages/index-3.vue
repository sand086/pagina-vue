<template>
  <div>
    <NavThree />
    <SliderThree />
    <ServicesBox />
    <WhyCodesk />
    <ExploreCodesk />
    <CallToActionTwo />
    <Team />
    <Brands />
    <Testimonial />
    <WriteMessage />
    <Blog />
    <GMap />
    <Footer />
  </div>

</template>

<script>
  import Footer from "../components/Footer";
  import NavThree from "../components/NavThree";
  import SliderThree from "../components/SliderThree";
  import ServicesBox from "../components/ServicesBox";
  import WhyCodesk from "../components/WhyCodesk";
  import ExploreCodesk from "../components/ExploreCodesk";
  import CallToActionTwo from "../components/CallToActionTwo";
  import Team from "../components/Team";
  import Brands from "../components/Brands";
  import Testimonial from "../components/Testimonial";
  import WriteMessage from "../components/WriteMessage";
  import Blog from "../components/Blog";
  import GMap from "../components/GMap";
  export default {
    components: {
      GMap,
      Blog,
      WriteMessage,
      Testimonial,
      Brands,
      Team,
      CallToActionTwo,
      ExploreCodesk,
      WhyCodesk,
      ServicesBox,
      SliderThree,
      NavThree,
      Footer,
    },
    head(){
      return {
        title: "Codesk | Home 3"
      }
    }
  }
</script>
