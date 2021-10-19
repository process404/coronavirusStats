<template>
  <header>
    <div class="flex justify-center items-center h-auto backdrop: bg-green-600 mb-3 flex-col gap-2 pb-5 pt-5">
      <h1 class="font-bold text-white w-full text-left pl-5 text-2xl md:text-3xl">Covid 19 Tracker</h1>
      <p class="font-normal text-white w-full text-left pl-5">Using an API by <a class="text-black hover:text-white " href="https://covid19api.com" target="_blank">covid19api.com</a></p>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({

})

export default class Header extends Vue {
  
}
</script>
