<template>
  <div>
    <Nav />
    <PageHeader title="News Single" />
    <BlogDetails />
    <Footer />
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import BlogDetails from "../components/BlogDetails";
  export default {
    components: {
      BlogDetails,
      Footer,
      PageHeader,
      Nav
    },
    head(){
      return {
        title: "Codesk | News Single"
      }
    }
  }
</script>
