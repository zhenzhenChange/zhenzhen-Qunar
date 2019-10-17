<template>
  <header>
    <div class="header-back">
      <span class="iconfont iconfont-back">&#xe612;</span>
    </div>
    <div class="header-search">
      <span class="iconfont iconfont-search">&#xe631;</span><span>输入城市/景点/游玩主题</span>
    </div>
    <router-link to="/city">
      <div class="header-city">
        <span>{{this.city}}</span><span class="iconfont iconfont-city">&#xe60c;</span>
      </div>
    </router-link>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
@import "~@css/global.styl"
header
  display: flex
  height: $rem86
  line-height: $rem86
  background-color: $home-bgc
  color: $color-FFF

  .header-back
    width: $rem86
    text-align: center
    float: left

    .iconfont-back
      display: inline-block
      width: 100%
      height: 100%
      font-size: .5rem

  .header-search
    flex: 1
    height: .62rem
    line-height: .62rem
    padding-left: .2rem
    margin: .12rem .2rem
    background-color: $color-FFF
    color: $color-CCC
    border-radius: .1rem

    .iconfont-search
      margin-right: .2rem;

  .header-city
    min-width: 1.04rem
    padding: 0 .1rem
    text-align: center
    float: right
    color: $color-FFF

    .iconfont-city
      margin-left: .1rem
      font-size: .2rem
</style>
