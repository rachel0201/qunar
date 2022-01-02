<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">Current City</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.city }}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">Popular City</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>

      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BScroll from "@better-scroll/core";
import ObserveDom from "@better-scroll/observe-dom";
BScroll.use(ObserveDom);
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter() {
      console.log("letter", this.letter);
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      hasVerticalScroll: true
    });
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  computed: {
    ...mapState(["city"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  overflow:hidden
  position:absolute
  top:1.58rem
  left:0
  right:0
  bottom:0
  .title
    line-height:0.54rem
    background:#eee
    padding-left:0.2rem
    color:#666
    font-size:0.26rem
  .button-list
    overflow:hidden
    padding:0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      width:33.33%
      float:left
      .button
        padding:0.1rem 0
        margin:0.1rem
        text-align:center
        border:0.02rem solid #ccc
        border-radius:0.06rem
  .item-list
    .item
      line-height:0.54rem
      color:#666
      padding-left:0.2rem
</style>
