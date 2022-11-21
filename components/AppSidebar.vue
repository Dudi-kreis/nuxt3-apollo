<template>
  <div class="app-sidebar bg-black flex flex-col text-white py-7 gap-6 z-10 relative h-screen">
    <button class="toggle-button absolute -right-3 z-10 top-36">
      <i class="fa-regular fa-chevron-right"></i>
    </button>
    <div class="flex flex-col items-center">
      <div class="flex flex-grow w-full px-8 pb-5 mt-3 wetake-logo">
        <img src="~assets/images/logo-wetake.svg" alt="wetakelogo"/>
      </div>

      <!--
      <avatar class="circle" diameter="90"
          image="https://threema.ch/images/profile_picture/profile_picture_before.jpg">
      </avatar>

      <div class="profile-name text-sm py-1 capitalize">
          <h1>marie-claire dupres</h1>
      </div>
      <div class="edit-profile flex flex-col edit-profile pb-8 gap-2">
          <button>
              <p>Edit profile</p>
          </button>
      </div>
      -->
    </div>
    <div class="flex flex-col flex-grow justify-between px-12 gap-10">
      <nav class="flex flex-col gap-4 sidebar-navigation">

        <ul class="flex flex-col gap-3">
          <li>
            <NuxtLink to="/feed">Feed</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/analytics">Analytics</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/my-profile">My profile</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/inbox">Inbox</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/calendar">Calendar</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/library">Library</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/shop">Shop</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/request">Request</NuxtLink>
          </li>
        </ul>
      </nav>

      <nav class="flex flex-col gap-4 sidebar-navigation">
        <NuxtLink class="flex flex-row text-sm items-baseline gap-4" to="/settings">
          <i class="fa-gear fa-regular"></i><span>Settings</span>
        </NuxtLink>
        <!--
        <a class="flex flex-row text-sm items-baseline gap-4" href="/user/switch">
            <i class="fa-arrows-rotate fa-regular"></i><span>Switch to WeLearn</span>
        </a>
        -->
        <a href="#" class="flex flex-row text-sm items-baseline gap-4" @click="logout">
          <i class="fa-arrow-right-from-bracket fa-regular"></i><span>Logout</span>
        </a>
        <!---->
      </nav>
      <!---->
    </div>
  </div>
</template>
<script setup>
</script>

<style scoped>
.main {
  width: 127px;
}

.router-link-exact-active {
  color: #12b488;
}

</style>
