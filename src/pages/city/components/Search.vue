<template>
  <div class="search">
    <input class="search-input" type="text" placeholder=" To where?" />
  </div>
</template>

<script>
export default {
  name: "CitySearch"
};
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.search
  height:.72rem
  padding:0 0.2rem
  background:$bgColor
  .search-input
    height:0.62rem
    width:100%
    text-align:center
    border-radius:0.06rem
    color:#666
    padding:0 0.2rem
    box-sizing:border-box
</style>
