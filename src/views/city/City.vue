<template>
  <div>
    <city-header/>
    <city-search :cities="cities"/>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"/>
    <city-alphabet :cities="cities" @changeLetter="changeLetter"/>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityData () {
      axios.get('/api/city.json').then((res) => {
        let ret = res.data.ret
        let data = res.data.data
        if (ret && data) {
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      })
    },
    changeLetter (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityData()
  }
}
</script>

<style scoped>

</style>
