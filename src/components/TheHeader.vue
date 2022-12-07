<template>
  <div class="header px-4 py-2">
    <span class="title">{{ title }}</span>
    <font-awesome-icon class="filter-icon" icon="fa-solid fa-filter" />
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
  }
}
</style>
