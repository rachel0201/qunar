<template>
  <div class="review">
    <span v-for="(star, index) of starUrl" :key="index">
      <img class="star" alt="" :src="star" />
    </span>
    <p class="review-num">2,360 Reviews</p>
  </div>
</template>

<script>
const LENGTH = 5;
// const START_ON = "../../../img/star-on.png";
// const START_OFF = "../../../img/star-off.png";
// const START_HALF = "../../../img/star-half.png";

const START_ON = "../../../../image/star-on.png";
const START_OFF = "../../../../image/star-off.png";
const START_HALF = "../../../../image/star-half.png";

export default{
  name:"review"
  data(){
    return{
      score:2.7
    }
  }
  computed: {
    starUrl() {
      let starUrl = [];
      let score = Math.floor(this.recommendList.score * 2) / 2;
      let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);

      for (let i = 0; i < integer; i++) {
        starUrl.push(START_ON);
      }
      if (hasDecimal) {
        starUrl.push(START_HALF);
      }
      while (starUrl.length < LENGTH) {
        starUrl.push(START_OFF);
      }
      return starUrl;
    }
  }
}
</script>

<style></style>
