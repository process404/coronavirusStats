<template>
  <div v-if="countrySelected == 0" class="p-5 bg-green-100 rounded min-h-52">
    <h2 class="text-2xl text-green-900 font-bold mb-3">Filter by Country</h2>
    <select @change="onChangeCountry()" v-model="countrySelected" class="form-select mt-1 w-full rounded text-white pt-2 pb-2 pr-1 pl-1 bg-gray-rgb">
        <option value="0" selected>
            Select Country
        </option>
        <option v-for="country in countries" :value="country.ID">
            {{country.Country}}
        </option>
    </select>
  </div>
  <div v-if="countrySelected != 0" class="p-5 bg-yellow-100 rounded min-h-52">
      <h2 class="text-2xl text-yellow-900 font-bold mb-3">Now filtered by {{filteredBy}}</h2>
      <h3 @click="clearCountryFilter()" class="text-white text-lg w-auto font-semibold  mt-2 cursor-pointer bg-gray-button rounded-lg p-1 pl-3 pr-3 w-50 inline-block hover:bg-red-600">Clear Filter</h3>
  </div>
</template>

<script>
export default {
    name:'countrySelect',
    props:['countries'],
    data(){
        return{
            countrySelected: 0,
            filteredBy: null,
        }
    },
    methods:{
        onChangeCountry(){
            const country = this.countries.find((item) => item.ID === this.countrySelected)
            this.$emit('get-country', country)
            this.filteredBy = country.Country
        },
        clearCountryFilter(){
            this.countrySelected = 0
            this.$emit('clear-country')
        }
    }
}
</script>

<style>

</style>