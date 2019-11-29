<template>
  <div class="global-header">
    <span class="global-header-label">Welcome to Our Library!!</span>
  </div>
</template>

<script>
export default {
  name: "GlobalHeader"
};
</script>

<style scoped lang="scss">
.global-header {
  background-color: $HEADER_BACKGROUND;
  height: 6.5vh;
}
.global-header-label {
  color: $HEADER_LABEL;
  font-weight: bold;
  line-height: 6.5vh;
}
</style>
