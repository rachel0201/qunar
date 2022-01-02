<template>
  <div id="app">
    <keep-alive>
      <!-- <keep-alive exclude="Detail">除了Detail其他页面都缓存 -->
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style></style>
