<template>
  <div class="swiper-box">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="swiper-img" src="~@images/No1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="~@images/No2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="~@images/No3.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="~@images/No4.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="~@images/No5.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="~@images/No6.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="~@images/No7.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="~@images/No8.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="~@images/No9.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="~@images/No10.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        speed: 1000
      },
      imgList: [
        { id: '001', imgUrl: '~@images/No1.jpg' },
        { id: '002', imgUrl: '~@images/No2.jpg' },
        { id: '003', imgUrl: '~@images/No3.jpg' },
        { id: '004', imgUrl: '~@images/No4.jpg' },
        { id: '005', imgUrl: '~@images/No5.jpg' },
        { id: '006', imgUrl: '~@images/No6.jpg' },
        { id: '007', imgUrl: '~@images/No7.png' },
        { id: '008', imgUrl: '~@images/No8.jpg' },
        { id: '009', imgUrl: '~@images/No9.jpg' },
        { id: '010', imgUrl: '~@images/No10.jpg' }
      ]
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
