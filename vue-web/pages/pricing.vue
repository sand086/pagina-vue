<template>
  <div>
    <Nav />
    <PageHeader title="Pricing" />
    <PricingPage />
    <ExploreCodesk />
    <CallToActionTwo />
    <Footer />
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import PricingPage from "../components/PricingPage";
  import ExploreCodesk from "../components/ExploreCodesk";
  import CallToActionTwo from "../components/CallToActionTwo";
  export default {
    components: {
      CallToActionTwo,
      ExploreCodesk,
      PricingPage,
      Footer,
      PageHeader,
      Nav
    },
    head(){
      return {
        title: "Codesk | Pricing"
      }
    }
  }
</script>
