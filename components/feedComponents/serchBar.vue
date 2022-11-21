<template>
  <div class="feed-main">
    <div class="input-search flex border rounded-2xl px-4 py-2">
      <input type="text" placeholder="Marie-Claire, looking for learning session ?"
             class="flex-grow bg-transparent outline-none">
      <div class="search-icon">
        <i class="fa-regular fa-magnifying-glass"></i>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
div.feed-main {
  max-width: 550px;

  & > div.input-search {
    @apply bg-white text-sm;
  }
}
</style>
