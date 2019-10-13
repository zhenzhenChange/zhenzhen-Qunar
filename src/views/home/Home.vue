<template>
  <div>
    <home-header/>
    <home-swiper/>
    <home-section/>
    <home-hot/>
    <home-weekend/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeSection from './components/Section'
import HomeHot from './components/Hot'
import HomeWeekend from './components/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeSection,
    HomeHot,
    HomeWeekend
  }
}
</script>

<style>

</style>
