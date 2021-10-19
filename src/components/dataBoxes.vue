<template>
  <div class="grid md:grid-cols-2 gap-4 mt-5 mb-5">
      <div class="shadow-md bg-green-100 p-5 text-center rounded">
          <h3 class="text-3xl text-left text-green-900 font-bold">Cases</h3>
          <h5 v-if="country == null" class="text-s text-left text-green-900 font-normal mb-4">Worldwide</h5>
          <h5 v-if="country != null" class="text-s text-left text-green-900 font-normal mb-4">in {{country}}</h5>
          <div class="text-2xl text-left mb-4">
              <span class="font-semibold">
                  New: 
                  <span class="font-normal">{{stats.NewConfirmed}}</span>
              </span>
              <hr class="pt-3 bg-opacity-0 border-t-0">
              <span class="font-semibold">Total: 
                  <span class="font-normal">{{stats.TotalConfirmed}}</span>
              </span>
          </div>
      </div>
      <div class="shadow-md bg-green-100 p-5 text-center rounded">
          <h3 class="text-3xl text-left text-green-900 font-bold">Deaths</h3>
          <h5 v-if="country == null" class="text-s text-left text-green-900 font-normal mb-4">Worldwide</h5>
          <h5 v-if="country != null" class="text-s text-left text-green-900 font-normal mb-4">in {{country}}</h5>
          <div class="text-2xl text-left mb-4">
              <span class="font-semibold">
                  New: 
                  <span class="font-normal">{{stats.NewDeaths}}</span>
              </span>
              <hr class="pt-3 bg-opacity-0 border-t-0">
              <span class="font-semibold">Total: 
                  <span class="font-normal">{{stats.TotalDeaths}}</span>
              </span>
          </div>
      </div>
  </div>
  <!-- Recovered Stats does not work with this API for some reason. -->
  <!-- <div class="shadow-md bg-green-100 p-5 mb-5 text-center rounded">
    <h3 class="text-3xl text-left text-green-900 font-bold mb-4">Recovered</h3>
    <div class="text-2xl text-left mb-4">
        <span class="font-semibold">Total: 
            <span class="font-normal">{{stats.TotalRecovered}}</span>
        </span>
        <br>
        <span class="font-semibold">New: 
            <span class="font-normal">{{stats.NewRecovered}}</span>
        </span>
    </div>
  </div> -->
</template>

<script>
export default {
    name: 'dataBoxes',
    props: ['stats','country']
}
</script>

<style>

</style>