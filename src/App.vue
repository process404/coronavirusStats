<template>
  <Header/>
  <div class="container w-screen max-w-none h-full max-h-none">
    <router-view/>
  </div>
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from '@/components/footer.vue'

export default{
  components:{
    Header,
    Footer
  }
}
</script>

<style>
  body{
    background: rgb(20,20,20)
  }
</style>
