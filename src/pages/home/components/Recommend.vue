<template>
  <div>
    <div class="title">Get Inspired</div>
    <ul>
      <router-link
        :to="'/detail/' + item.id"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <img class="item-img" alt="" :src="item.img" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <div class="review">
            <img class="star" alt="" src="../../../img/star-on.png" />
            <img class="star" alt="" src="../../../img/star-on.png" />
            <img class="star" alt="" src="../../../img/star-on.png" />
            <img class="star" alt="" src="../../../img/star-half.png" />
            <img class="star" alt="" src="../../../img/star-off.png" />
            <p class="review-num">{{ item.review }} Reviews</p>
          </div>
          <p class="item-desc">{{ item.desc }}</p>
          <p class="read-more">Read More</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
//stars

export default {
  name: "HomeRecommend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  @import '~styles/mixins.styl'
.title
  line-height 0.6rem
  background:#eee
  margin-top: -0.6rem
  text-indent: 0.2rem
  font-size:0.4rem
  padding:0.1rem

.item
  overflow: hidden
  display:flex
  height:1.9rem
  color:$darkTextColor
  .item-img
    width: 2.4rem
    height: 1.7rem
    padding:.1rem
    border-radius: 0.1rem
  .item-info
    flex:1
    padding 0.1rem
    min-width:0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      margin-top:0.36rem
      line-height:0.4rem
      font-size:0.2rem
      color:#ccc
      ellipsis()
    .read-more
      font-size:0.2rem
    .review
      font-size:0.2rem
      width:10rem
      height:0
      background:Red
      .star
        width:0.2rem
        height:0.2rem
        position:relative
        float:left
      .review-num
        position:relative
        float:left
        padding-left:0.1rem
</style>
