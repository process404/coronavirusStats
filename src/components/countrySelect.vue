<template>
  <div v-if="countrySelected == 0" class="p-5 bg-green-100 border-4 rounded min-h-52">
    <h2 class="text-2xl text-green-900 font-bold mb-3">Filter by Country</h2>
    <select @change="onChangeCountry()" v-model="countrySelected" class="form-select mt-1 w-full rounded text-white pt-1 pb-1 bg-gray-rgb">
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
      <h3 @click="clearCountryFilter()" class="text-black text-lg w-auto font-semibold text-opacity-70 mt-2 cursor-pointer hover:text-opacity-100 hover:underline">Clear Filter</h3>
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