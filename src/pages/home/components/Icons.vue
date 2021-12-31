<template>
  <div class="icons">
    <div class="icon top">
      <i class="iconfont">&#xe8e9;</i>
      <p class="des">Hotel</p>
    </div>
    <div class="icon top">
      <i class="iconfont">&#xf841;</i>
      <p class="des">Flights</p>
    </div>
    <div class="icon top">
      <i class="iconfont">&#xe615;</i>
      <p class="des">Holidays</p>
    </div>
    <div class="icon top">
      <i class="iconfont">&#xe64d;</i>
      <p class="des">Landmark</p>
    </div>

    <div class="icon below">
      <i class="iconfont">&#xe61b;</i>
      <p class="des">Cars</p>
    </div>
    <div class="icon below">
      <i class="iconfont">&#xe604;</i>
      <p class="des">Day trip</p>
    </div>
    <div class="icon below">
      <i class="iconfont">&#xe623;</i>
      <p class="des">Experience</p>
    </div>
    <div class="icon below">
      <i class="iconfont">&#xe655;</i>
      <p class="des">Plans</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIcons"
};
</script>

<style lang="stylus" scoped>
.icons
  overflow: hidden
  height:0
  padding-bottom: 50%
  .top
    margin-top: 0.22rem
  .below
    margin-top: -0.44rem
  .icon
    position:relative
    float:left
    width: 25%
    padding-bottom: 25%
    height:0
    .iconfont
      font-size:1rem
      top:0
      left 0
      right: 0
      bottom: .44rem
      padding-left: 0.44rem
    .des
      text-align: center
      color:#333
</style>
