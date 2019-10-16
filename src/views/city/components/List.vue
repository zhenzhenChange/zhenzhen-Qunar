<template>
  <div class="list" ref="listScroll">
    <div>
      <section>
        <div class="title">当前城市</div>
        <div class="cities">
          <div class="city-box">
            <div class="city">北京</div>
          </div>
        </div>
      </section>
      <section>
        <div class="title">热门城市</div>
        <div class="cities">
          <div class="city-box" v-for="item of hotCities" :key="item.id">
            <div class="city">{{item.name}}</div>
          </div>
        </div>
      </section>
      <section v-for="(value,key) of cities" :key="key">
        <div class="title">{{key}}</div>
        <div class="items" v-for="item of value" :key="item.id">
          <div class="item border-bottom">{{item.name}}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.listScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import "~@css/global.styl"
.list
  position: absolute
  top: 1.66rem
  left: 0
  right: 0
  bottom: 0
  overflow: hidden

  .title
    line-height: .54rem
    background-color: #EEE
    padding-left: .2rem
    font-size: .26rem
    color: #666
    border-bottom: .02rem $color-CCC solid
    border-top: .02rem $color-CCC solid

  .cities
    padding: .1rem .6rem .1rem .1rem
    overflow: hidden

    .city-box
      width: 33.33%;
      float: left

      .city
        text-align: center
        padding: .1rem 0
        margin: .1rem
        border: .02rem $color-CCC solid
        border-radius: .2rem

  .items
    .item
      line-height: .76rem
      padding-left: .2rem

    .border-bottom
      &:before
        border-color: #666
</style>
