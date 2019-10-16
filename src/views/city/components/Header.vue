<template>
  <div class="header">
    <span>城市选择</span>
    <router-link to="/">
      <span class="iconfont header-back">&#xe612;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import "~@css/global.styl"
.header
  height: $rem86
  line-height: $rem86
  background-color: $home-bgc
  font-size: .35rem
  text-align: center
  color: $color-FFF
  position: relative;

  .header-back
    position: absolute;
    left: 0
    width: $rem86
    font-size: .5rem
    color: $color-FFF
</style>
