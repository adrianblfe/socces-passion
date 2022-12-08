<template>
  <div class="header px-3 py-2">
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0D1321;
  width: 100%;

  .title, .filter-icon {
    color: #F0EBD8;
    // font-size: 25px;
  }
}
</style>
