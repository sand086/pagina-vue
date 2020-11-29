<template>
  <div>
    <Nav />
    <PageHeader title="Events" />
    <UpcomingEventsTwo />
    <WeListen />
    <Footer />
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import UpcomingEventsTwo from "../components/UpcomingEventsTwo";
  import WeListen from "../components/WeListen";
  export default {
    components: {
      WeListen,
      UpcomingEventsTwo,
      Footer,
      PageHeader,
      Nav
    },
    head(){
      return {
        title: "Codesk | Events"
      }
    }
  }
</script>
