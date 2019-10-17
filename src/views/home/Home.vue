<template>
  <div>
    <home-header/>
    <home-swiper :swiperList="swiperList"/>
    <home-section :sectionList="sectionList"/>
    <home-hot :hotList="hotList"/>
    <home-weekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeSection from './components/Section'
import HomeHot from './components/Hot'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      sectionList: [],
      hotList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeSection,
    HomeHot,
    HomeWeekend
  },
  methods: {
    getHomeData () {
      axios.get(`/api/index.json?city=${this.city}`).then((res) => {
        let ret = res.data.ret
        let data = res.data.data
        if (ret && data) {
          this.swiperList = data.swiperList
          this.sectionList = data.sectionList
          this.hotList = data.hotList
          this.weekendList = data.weekendList
        }
      })
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeData()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeData()
    }
  }
}
</script>

<style>

</style>
