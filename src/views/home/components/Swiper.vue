<template>
  <div class="swiper-box">
    <swiper :options="swiperOption" v-if="isShowSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        speed: 1000
      }
    }
  },
  computed: {
    isShowSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-box /deep/ .swiper-pagination-bullet-active {
  background-color: #FFF
}

.swiper-box
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 26.7%
  background-color: $swiper-bgc

  .swiper-img
    width: 100%
</style>
