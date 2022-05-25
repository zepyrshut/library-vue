<template>
  <div :class="appTheme">
    <router-view :theme="appTheme" />
  </div>
</template>

  <script>
export default {
  name: 'App',
  data: () => {
    return {
      appTheme: localStorage.getItem('theme'),
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Bebas+Neue&family=Roboto:wght@400;500;700&display=swap');

.amatic-sc {
  font-family: 'Amatic SC', cursive;
}

.bebas-neue {
  font-family: 'Bebas Neue', sans-serif;
}

.roboto {
  font-family: 'Roboto', sans-serif;
}
</style>
