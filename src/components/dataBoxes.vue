<template>
  <div class="grid md:grid-cols-2 gap-4 mt-5 mb-5">
      <div class="shadow-md bg-green-100 p-5 text-center rounded">
          <h3 class="text-3xl text-left text-green-900 font-bold mb-4">Cases</h3>
          <div class="text-2xl text-left mb-4">
              <span class="font-semibold">Total: 
                  <span class="font-normal">{{stats.TotalConfirmed}}</span>
              </span>
              <br>
              <span class="font-semibold">
                  New: 
                  <span class="font-normal">{{stats.NewConfirmed}}</span>
              </span>
          </div>
      </div>
      <div class="shadow-md bg-green-100 p-5 text-center rounded">
          <h3 class="text-3xl text-left text-green-900 font-bold mb-4">Deaths</h3>
          <div class="text-2xl text-left mb-4">
              <span class="font-semibold">Total: 
                  <span class="font-normal">{{stats.TotalDeaths}}</span>
              </span>
              <br>
              <span class="font-semibold">
                  New: 
                  <span class="font-normal">{{stats.NewDeaths}}</span>
              </span>
          </div>
      </div>
  </div>
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
    props: ['stats']
}
</script>

<style>

</style>