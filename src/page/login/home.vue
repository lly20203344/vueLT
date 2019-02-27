<template>
<div>
    <Header/>
  <main>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </main>
   <Footer/>
</div>

</template>
<script>
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
  export default{
    name: '',
    data(){
      return {

      }
    },
    components:{
      Footer,
      Header
    },
    methods: {


    },
    mounted(){
     
    }

  }
</script>
<style scoped>
</style>
