<template>
  <div class="section">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="icon">
          <img src="@images/1.png" alt="">
          <p>景点门票</p>
        </div>
        <div class="icon">
          <img src="@images/2.png" alt="">
          <p>桂林必游</p>
        </div>
        <div class="icon">
          <img src="@images/3.png" alt="">
          <p>游船</p>
        </div>
        <div class="icon">
          <img src="@images/4.png" alt="">
          <p>桂林千古情</p>
        </div>
        <div class="icon">
          <img src="@images/5.png" alt="">
          <p>亲子游</p>
        </div>
        <div class="icon">
          <img src="@images/6.png" alt="">
          <p>漂流</p>
        </div>
        <div class="icon">
          <img src="@images/7.png" alt="">
          <p>玻璃栈道</p>
        </div>
        <div class="icon">
          <img src="@images/8.png" alt="">
          <p>游船风光</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="icon">
          <img src="@images/9.png" alt="">
          <p>文化古迹</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSection',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      imgList: []
    }
  },
  computed: {
    pages () {
      const pages = []
      this.imgList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@css/global.styl"
.section /deep/ .swiper-container
  height: 4rem

.icon
  width: 25%
  height: 50%
  float: left
  text-align: center

  img
    width: 1rem
    height: 1rem
    margin-top: .25rem

  p
    margin-top: .15rem
    color: $color-dark;
    ellipsis()
</style>
