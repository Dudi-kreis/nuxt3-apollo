<template>
  <div class="main">
    <!--    <p class="border-2 border-dashed border-gray-400/50 rounded-xl py-8 px-2 opacity-80">Hello There</p>-->
    <h1>Hello</h1>
    <FeedComponentsUser/>
    <FeedComponentsUserRating/>

  </div>
</template>

<script>

</script>

<style scoped lang="scss">
div.main {
  @apply flex flex-col flex-grow gap-3 bg-white rounded-2xl border px-10 py-5;
  max-width: 550px;
}

</style>
