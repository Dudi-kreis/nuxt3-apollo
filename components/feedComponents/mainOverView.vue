<template>
  <!--    <p class="border-2 border-dashed border-gray-400/50 rounded-xl py-8 px-2 opacity-80">Hello There</p>-->
  <div class="main">
    <div class="flex gap-5">
      <div class="flex flex-col">
        <FeedComponentsUser class="user-style"/>
        <FeedComponentsUserRating style="margin-top: -10px;"/>
      </div>
      <div class="broadcast-status flex flex-col">
        <FeedComponentsBroadcastStatus/>
        <SharedComponentsUserTitle class="userTitle-style"/>
        <SharedComponentsUserName class="userName-style"/>
      </div>
      <SharedComponentsCountDownTimer/>
    </div>
    <div class="border border-gray-100"></div>
    
    <div class="live-session-post flex flex-col gap-3">
      <SharedComponentsLiveSessionURL/>
      <FeedComponentsSessionDetails/>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
@import "~/styles/colors.scss";

div.main {
  @apply flex flex-col flex-grow gap-3 bg-white rounded-2xl border px-10 py-5;
  max-width: 550px;
}
.user-style{

}

.userName-style {
  @apply font-medium;
  color: $color-gray;
  font-size: 12px;
}

.userTitle-style {
  @apply font-semibold;
  font-size: 14px;
}

</style>
