<template>
  <div class="section">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <p>{{item.title}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSection',
  props: {
    sectionList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.sectionList.forEach((item, index) => {
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
