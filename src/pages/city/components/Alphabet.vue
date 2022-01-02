<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.list
  z-index:10
  display:flex
  flex-direction:column
  justify-content:center
  position:absolute
  top:1.58rem
  right:0
  bottom:0
  width:0.4rem
  .item
    line-height:0.44rem
    text-align:center
    color:$bgColor
</style>
