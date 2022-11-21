<template>
  <div class="flex flex-row flex-grow">
    <AppSidebar/>
    <div class="flex flex-col flex-grow">
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink to="/" class="font-bold">Wetake</NuxtLink>
          <ul class="flex gap-4">
            <li class="flex gap-1 items-center">
              <NuxtLink to="/upload-course">Upload Course</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/create-live">Create Live</NuxtLink>
            </li>
          </ul>
        </nav>
      </header>

      <!-- output the page content -->
      <div class="container mx-auto p-4">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488
}
</style>
<script setup>

</script>
