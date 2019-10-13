<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item">
        <img src="https://imgs.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_200x200_2cce447f.jpg" alt="">
        <div class="info">
          <p class="info-title">颐和园颐和园颐和园颐和园颐和园颐和园颐和园</p>
          <p class="info-desc">美丽颐和园一日游美丽颐和园一日游美丽颐和园一日游</p>
          <button class="info-btn">查看详情</button>
        </div>
      </li>
      <li class="item">
        <img src="https://imgs.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_200x200_2cce447f.jpg" alt="">
        <div class="info">
          <p class="info-title">颐和园颐和园颐和园颐和园颐和园颐和园颐和园</p>
          <p class="info-desc">美丽颐和园一日游美丽颐和园一日游美丽颐和园一日游</p>
          <button class="info-btn">查看详情</button>
        </div>
      </li>
      <li class="item">
        <img src="https://imgs.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_200x200_2cce447f.jpg" alt="">
        <div class="info">
          <p class="info-title">颐和园颐和园颐和园颐和园颐和园颐和园颐和园</p>
          <p class="info-desc">美丽颐和园一日游美丽颐和园一日游美丽颐和园一日游</p>
          <button class="info-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeHot'
}
</script>

<style lang="stylus" scoped>
@import "~@css/global.styl"
.title
  line-height: .8rem
  text-indent: .2rem
  background-color: $swiper-bgc

.item
  display: flex
  height: 2rem
  overflow: hidden
  border-bottom: .03rem $swiper-bgc solid

  img
    width: 2rem
    padding: .1rem

  .info
    flex: 1
    padding: .1rem
    min-width: 0

    .info-title
      font-size: .32rem
      line-height: .54rem
      color: black
      ellipsis()

    .info-desc
      color: $color-CCC
      line-height: .4rem
      ellipsis()

    .info-btn
      line-height: .44rem
      margin-top: .16rem;
      background-color: #FF9300
      padding: 0 .2rem
      border-radius: .08rem
      color: $color-FFF
</style>
