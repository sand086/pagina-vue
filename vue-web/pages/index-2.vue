<template>
  <div>
    <NavTwo />
    <SliderTwo />
    <SubArea />
    <FindSpace />
    <LandingArea />
    <Brands />
    <JoinCommunity />
    <UpcomingEvents />
    <JoinThousands />
    <Pricing />
    <VideoArea />
    <WeListen />
    <BlogTwo />
    <CallToActionTwo />
    <Footer />
  </div>

</template>

<script>
  import NavTwo from "../components/NavTwo";
  import SliderTwo from "../components/SliderTwo";
  import SubArea from "../components/SubArea";
  import FindSpace from "../components/FindSpace";
  import LandingArea from "../components/LandingArea";
  import Brands from "../components/Brands";
  import JoinCommunity from "../components/JoinCommunity";
  import UpcomingEvents from "../components/UpcomingEvents";
  import JoinThousands from "../components/JoinThousands";
  import Pricing from "../components/Pricing";
  import VideoArea from "../components/VideoArea";
  import WeListen from "../components/WeListen";
  import BlogTwo from "../components/BlogTwo";
  import CallToActionTwo from "../components/CallToActionTwo";
  import Footer from "../components/Footer";
  export default {
    components: {
      Footer,
      CallToActionTwo,
      BlogTwo,
      WeListen,
      VideoArea,
      Pricing,
      JoinThousands,
      UpcomingEvents,
      JoinCommunity,
      Brands,
      LandingArea,
      FindSpace,
      SubArea,
      SliderTwo,
      NavTwo,
    },
    head(){
      return {
        title: "Codesk | Home 2"
      }
    }
  }
</script>
