<template>
  <div id="app" class="container-fluid">
    <div class="row container-header">
      <div class="col-12 px-0">
        <TheHeader title="Soccer Passion" />
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    TheHeader: () => import('./components/TheHeader.vue'),
  }
}
</script>

<style lang="scss" scoped>
#app {
  background-color: #1D2D44;
}
</style>
