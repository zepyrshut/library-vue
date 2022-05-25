<template>
  <Navbar />
  <div>
    <router-view :theme="appTheme" />
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/shared/Navbar.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  name: 'MainView',
  components: {
    Navbar,
    Footer
  },
}
</script>