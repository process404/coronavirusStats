<template>
  <main v-if="!loading" class="m-5">
    <dataTitle :text="title" :dataDate="dataDate" />
    <dataBoxes :stats="stats"/>
    <countrySelect :countries="countries" @clear-country="clearCountryData" @get-country="getCountryData"/>
  </main>
  <main v-else class="m-10 flex align-center justify-center text-center h-screen">
    <h1 class="font-semibold text-2xl text-white">Fetching Data...</h1>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import dataTitle from '@/components/dataTitle.vue'
import dataBoxes from '@/components/dataBoxes.vue'
import countrySelect from '@/components/countrySelect.vue'

@Options({
  components: {
    dataTitle,
    dataBoxes,
    countrySelect,
  },
  data(){
    return{
      loading: true,
      title: 'Last Updated: ',
      dataDate: '',
      stats: {},
      statsBackup: {},
      countries: [],
    }
  },
  methods:{
    async fetchCovidData(){
      const res = await fetch('https://api.covid19api.com/summary')
      const data = await res.json()
      return data
    },
    getCountryData(country){
      this.stats = country
    },
    clearCountryData(){
      this.stats = this.statsBackup
    }
  },
  async created(){
    const data = await this.fetchCovidData()
    
    this.dataDate = data.Date
    this.stats = data.Global
    this.statsBackup = data.Global
    this.countries = data.Countries 
    this.loading = false
  }
})
export default class Home extends Vue {}
</script>
