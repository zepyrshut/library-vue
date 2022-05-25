<template>
  <h1>Hello World</h1>

  <div :class="appTheme" class="pt-0.5">


    <div class="h-96 w-96 bg-red-700 dark:bg-blue-700"></div>

    <div data-feather="alert-octagon"></div>

    <BeakerIcon class="h-6 w-6" />

  </div>

  {{ theme }}

  xxx
  <theme-switcher :theme="theme" @themeChanged="updateTheme"
    class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer" />
  xxx
</template>

  <script>
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import feather from "feather-icons";
import { BeakerIcon } from '@heroicons/vue/outline';


export default {
  name: 'App',
  components: {
    ThemeSwitcher,
    BeakerIcon,
  },
  data() {
    return {
      theme: '',
      appTheme: localStorage.getItem('theme')
    }
  },
  created() {
    this.theme = localStorage.getItem('theme') || 'light';
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem('theme') || 'light';
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
    },
  },
  updated() {
    feather.replace();
  },
}
</script>

  <style lang="scss">
</style>
