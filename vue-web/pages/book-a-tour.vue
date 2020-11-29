<template>
  <div>
    <Nav />
    <PageHeader title="Book a tour" />
    <WriteMessageTwo />
    <CompanyLogo />
    <Footer />
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import WriteMessageTwo from "../components/WriteMessageTwo";
  import CompanyLogo from "../components/CompanyLogo";
  export default {
    components: {
      CompanyLogo,
      WriteMessageTwo,
      Footer,
      PageHeader,
      Nav
    },
    head(){
      return {
        title: "Codesk | Book a tour"
      }
    }
  }
</script>
