<template>
  <div>
    <div class="header-abs" v-show="showAbs">
      <router-link to="/">
        <i class="iconfont abs-back-icon">&#xe6ff;</i>
      </router-link>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      Tour detais
      <div class="header-left">
        <router-link to="/">
          <i class="iconfont fix-back-icon">&#xe6ff;</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      //console.log(document.documentElement.scrollTop);
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header-abs
  position:absolute
  left:0.2rem
  top:0.2rem
  width:0.8rem
  height:0.8rem
  line-height:0.8rem
  border-radius:0.4rem
  background:rgb(0,0,0,0.9)
  text-align:center
  .abs-back-icon
    z-index:2
    color:#eee
    font-size:0.4rem
.header-fixed
  z-index:1
  position:fixed
  top:0
  left:0
  right:0
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
    .fix-back-icon
      font-size: .4rem
      text-align: center
      color:$linkColor
      float:left
</style>
