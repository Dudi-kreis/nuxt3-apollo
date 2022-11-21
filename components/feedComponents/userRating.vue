<template>
  <div class="heart-icon">
    <i class="fa-solid fa-heart"></i>
  </div>

  <div class="rating text-white">
    <p>4.7</p>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "~/styles/colors";

:host {
  @apply w-full flex flex-row flex-grow border-2 border-white bg-black items-center rounded-2xl items-center justify-center gap-0.5;
  font-size: 12px;
  font-weight: 600;
}

div.heart-icon {
  color: $color-red;
}
</style>
