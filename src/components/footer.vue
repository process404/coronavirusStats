<template>
  <div class="bg-gray-footer w-full h-auto min-h-14 fixed bottom-0 flex justify-between pt-3 pb-3 sm:flex-col md:flex-row">
      <div class="sm:w-auto md:w-2/4 flex items-center justify-start pl-5">
        <h2 class="text-white">Built using <a class="text-vue-color hover:text-vue-color-hglt cursor-pointer" href="https://vuejs.org/">Vue</a> 
        and 
        <a href="https://tailwindcss.com/" class="text-tailwind-col cursor-pointer hover:text-tailwind-col-hglt">Tailwind</a>
         using a tutorial from 
        <a href="https://www.youtube.com/watch?v=m-MAIpnH9ag" class="text-red-800 hover:text-red-400">Youtube</a>
        
        </h2>
      </div>
      <div class="sm:w-auto md:w-1/3 flex pr-5 flex-col">
        <h2 class="text-white md:text-right sm:text-left md:pl-0 md:pt-0 sm:pl-5 sm:pt-5 font-light">This site may stop working if the rate limit of the API is reached.</h2>
        <br>
        <h2 class="text-white md:text-right sm:text-left md:pl-0 md:pt-0 sm:pl-5 sm:pt-5 font-light">Accuracy of data is dependant on the sources that the API uses</h2>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>