<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item of weekendList" :key="item.id">
        <div class="item-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import "~@css/global.styl"
.title
  line-height: .8rem
  text-indent: .2rem
  background-color: $swiper-bgc

li
  border-bottom: .1rem $swiper-bgc solid

  .item-img
    overflow: hidden
    height: 0
    padding-bottom: 37%;

    img
      width: 100%

  .info
    padding: .2rem

    .info-title
      font-size: .32rem
      line-height: .54rem
      color: black
      ellipsis()

    .info-desc
      color: $color-CCC
      line-height: .4rem
      ellipsis()
</style>
