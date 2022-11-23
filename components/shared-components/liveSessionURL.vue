<template>
  <div class="header flex space-x-1">
    <h1 class="text-xs">Lorem ipsum here</h1>
    <NuxtLink to="#" class="url text-xs">//marie-clairedupres/live/session200519</NuxtLink>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "~/styles/colors.scss";

div.header {
  & > h1 {
    color: $color-dark-gray;
  }

  & > .url {
    color: $color-blue
  }
}
</style>
