<template>
  <div class="text-center mt-5 mb-5">
      <h2 class="text-2xl text-left font-bold text-gray-200">{{text}} <span class="font-normal inline-block text-gray-400">{{ timestamp }}</span></h2>
  </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'DataTitle',
    props: ['text','dataDate'],
    computed:{
        timestamp: function(){
            return moment(this.dateDate).format('MMMM Do YYYY, h:mm:ss a')
        },
    },
}
</script>

<style>

</style>