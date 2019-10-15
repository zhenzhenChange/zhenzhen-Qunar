<template>
  <div class="search">
    <input type="text" placeholder="请输入城市或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import "~@css/global.styl"
.search
  height: .72rem
  line-height: .72rem
  background-color: $home-bgc
  text-align: center
  padding: .05rem 0

  input
    width: 90%
    height: 80%
    text-align: center
    border-radius: .1rem
    padding: 0 .15rem
</style>
