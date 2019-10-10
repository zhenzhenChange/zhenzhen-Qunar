<template>
  <div>
    <home-header/>
    <home-swiper/>
    <home-section/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeSection from './components/Section'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeSection
  }
}
</script>

<style>

</style>
