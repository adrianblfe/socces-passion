<template>
  <div id="home">
    <div class="row container-items">
      <TheCatalogue />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    TheCatalogue: () => import('../components/TheCatalogue.vue')
  }
}
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
  
  .container-items {
    height: 100%;
  }
}
</style>
