<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      starY: 0,
      timer: 0
    };
  },
  updated() {
    this.starY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("changeLetter", e.target.innerText);
      //console.log("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.starY) / 22);
          if (index >= 0 && index < this.letters.length + 1) {
            this.$emit("changeLetter", this.letters[index]);
          }
        }, 16);

        // console.log(starY);
        // console.log(touchY);
        // console.log(index);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
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
