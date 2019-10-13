<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li>
        <div class="item-img">
          <img src="https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg" alt="">
        </div>
        <div class="info">
          <p class="info-title">颐和园颐和园颐和园颐和园颐和园颐和园颐和园</p>
          <p class="info-desc">美丽颐和园一日游美丽颐和园一日游美丽颐和园一日游</p>
        </div>
      </li>
      <li>
        <div class="item-img">
          <img src="https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg" alt="">
        </div>
        <div class="info">
          <p class="info-title">颐和园颐和园颐和园颐和园颐和园颐和园颐和园</p>
          <p class="info-desc">美丽颐和园一日游美丽颐和园一日游美丽颐和园一日游</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend'
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
