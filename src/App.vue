<template>
  <div class="app">
    <Navbar  />
    <router-view/>

  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
 
 

 export default {
  name: 'App',
  components: {
     
    Navbar
    
  }
}


 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style>
  @import './assets/App.css';
</style>

<style>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css';
</style>