<template>
  <div>
    <Nav />
    <PageHeader title="Events Single" />
    <EventDetail />
    <EventInfo />
    <Footer />
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import EventDetail from "../components/EventDetail";
  import EventInfo from "../components/EventInfo";
  export default {
    components: {
      EventInfo,
      EventDetail,
      Footer,
      PageHeader,
      Nav
    },
    head(){
      return {
        title: "Codesk | Events Single"
      }
    }
  }
</script>
