<template>
  <div>
    <Nav />
    <PageHeader title="About" />
    <GetToKnow />
    <ChangingArea />
    <Testimonial />
    <JoinCommunity />
    <Team />
    <CompanyLogo />
    <Footer />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import GetToKnow from "../components/GetToKnow";
  import ChangingArea from "../components/ChangingArea";
  import Testimonial from "../components/Testimonial";
  import JoinCommunity from "../components/JoinCommunity";
  import Team from "../components/Team";
  import CompanyLogo from "../components/CompanyLogo";
  import Footer from "../components/Footer";
  export default {
    components: {
      Footer,
      CompanyLogo,
      Team,
      JoinCommunity,
      Testimonial,
      ChangingArea,
      GetToKnow,
      PageHeader,
      Nav
    },
    head(){
      return {
        title: "Codesk | About"
      }
    }
  }
</script>
