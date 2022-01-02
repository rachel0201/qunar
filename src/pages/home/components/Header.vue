<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe6ff;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe651;</span>City or Scenic Spot
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont down-icon">&#xe6b9;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(["city"])
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
.header
  display:flex
  background: $bgColor
  line-height:$headerHeight
  color:$linkColor

  .header-left
    width:.64rem
    float:left
    margin-left: .2rem
    .back-icon
      font-size: .4rem
      text-align: center
  .header-input
    flex:1
    height:.64rem
    line-height 0.64rem
    padding-left: .2rem
    margin-top: .12rem
    margin-left:.1rem
    background: #ffff
    border-radius: .1rem
    color: #ccc
    .search-icon
      margin-right: 0.2rem
  .header-right
    min-width:1.04rem
    padding:0 0.1rem
    text-align: center
    color:$linkColor
    .down-icon
      font-size:.4rem
      padding-top: .4rem
      margin-left: -0.04rem
</style>
