<template>
  <div :class="appTheme">


    <Navbar />

    <transition name="fade" mode="out-in">
      <router-view :theme="appTheme" />
    </transition>





  </div>
</template>

  <script>
import Navbar from "./components/Navbar.vue";


export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => {
    return {
      appTheme: localStorage.getItem('theme'),
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

  <style lang="scss">
</style>
