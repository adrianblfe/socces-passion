<template>
  <div id="app" class="container-fluid">
    <div class="row container-header">
      <div class="col-12 px-0">
        <TheHeader title="Soccer Passion" />
      </div>
    </div>

    <div class="row container-items">
      <TheCatalogue />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    TheHeader: () => import('./components/TheHeader.vue'),
    TheCatalogue: () => import('./components/TheCatalogue.vue')
  }
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  
  .container-header {
  }
  
  .container-items {
    height: 100%;
  }
}
</style>
