<template>
  <div class="flex flex-col">
    <div class="flex flex-row flex-grow border border-neutral-100 rounded-2xl gap-4">
      <div
          class="session-pic flex flex-row items-center justify-center bg-no-repeat bg-cover rounded-l-2xl bg-center origin-center">
        <button class="flex flex-row items-center justify-center rounded-full text-white text-4xl">
          <i class="fa-regular fa-circle-caret-right"></i>
        </button>
      </div>

      <div class="flex flex-col flex-grow items-start justify-center py-4 gap-3">
        <h1 class="font-medium text-sm">Descriprion</h1>
        <p class="sub-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incidid labore…</p>
        <div class="flex flex-row flex-wrap items-center gap-2">

        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
</script>

<style scoped lang="scss">
@import "~/styles/colors.scss";

div.session-pic {
  background-image: url("assets/images/macaron.jpeg");
  max-width: 178px;
  min-width: 178px;
  //min-height: 178px;
  //max-height: 178px;
  & > button {
    @apply aspect-square;
    width: 54px;
    display: none;
  }
}

div.session-pic:hover {
  & > button {
    display: inline-block;
  }
}
</style>
