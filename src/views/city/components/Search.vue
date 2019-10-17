<template>
  <div>
    <div class="search">
      <input type="text" placeholder="请输入城市或拼音" v-model="keyWord">
    </div>
    <div class="keyword-search" ref="search" v-show="keyWord">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="changeCity(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="isShowSearch">没有搜索到相关的城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  methods: {
    changeCity (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let key in this.cities) {
          this.cities[key].forEach(value => {
            if (value.spell.includes(this.keyWord) || value.name.includes(this.keyWord)) {
              result.push(value)
            }
          })
          this.list = result
        }
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.search)
  },
  computed: {
    isShowSearch () {
      return !this.list.length
    }
  }
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

.keyword-search
  position: absolute;
  top: 1.66rem
  left: 0
  right: 0
  bottom: 0
  z-index: 1
  overflow: hidden
  background-color: #EEE

  .search-item
    line-height: .62rem
    padding-left: .2rem
    ccolor: #666
    background-color: #FFF
</style>
