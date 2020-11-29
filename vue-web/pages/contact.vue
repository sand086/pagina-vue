<template>
  <div>
    <Nav />
    <PageHeader title="Contact" />
    <ContactInfo />
    <WriteMessageThree />
    <GMap />
    <Footer />
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import ContactInfo from "../components/ContactInfo";
  import WriteMessageThree from "../components/WriteMessageThree";
  import GMap from "../components/GMap";
  export default {
    components: {
      GMap,
      WriteMessageThree,
      ContactInfo,
      Footer,
      PageHeader,
      Nav
    },
    head(){
      return {
        title: "Codesk | Contact"
      }
    }
  }
</script>
