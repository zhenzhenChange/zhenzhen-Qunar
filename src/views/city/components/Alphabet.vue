<template>
  <div>
    <ul class="list">
      <li class="item" v-for="(value,key) of cities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import "~@css/global.styl"
.list
  position: absolute;
  right: 0
  top: 1.66rem
  bottom: 0
  width: .4rem
  line-height: .4rem
  display: flex
  flex-direction: column
  justify-content: center
  color: $home-bgc

  .item
    width: 100%
    text-align: center
</style>
