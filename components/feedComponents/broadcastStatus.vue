<template>
  <div class="live-tag flex flex-row items-center justify-center border rounded-full">
    <div class="flex flex-row items-center ">
      <div class="record-icon animate-ping" style="font-size: 11px">
        <i class="fa-regular fa-record-vinyl"></i>
      </div>
      <p class="font-semibold">Live</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import "~/styles/colors.scss";

div.live-tag {
  border-color: $color-red;
  color: $color-red;
  font-size: 11px;
  width: 60px;
  height: 25px;
}
</style>
