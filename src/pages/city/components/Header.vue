<template>
  <div class="header">
    Choose a city
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe6ff;</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header
  z-index:10
  position:relative
  overflow:hidden
  line-height:$headerHeight
  background:$bgColor
  text-align:center
  color:#fff
  font-size:0.4rem
  .header-left
    position:absolute
    top:0
    left:0
    width:.64rem
    float:left
    margin-left: .2rem
    .back-icon
      font-size: .4rem
      text-align: center
      color:$linkColor
</style>
