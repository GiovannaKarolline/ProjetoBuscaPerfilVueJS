<script setup>
import Busca from './components/Busca/Busca.vue'
import Navbar from './components/Navbar/Navbar.vue'
import Inicio from './components/Inicio/Inicio.vue'

</script>

<template>

  <div id="container">
    <Navbar></Navbar>
    <Inicio></Inicio>
    <Busca></Busca>
  </div>

</template>

<style>

  html{
    background-color: #cecfdd;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  }

  #container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #cecfdd !important;
    
  }

</style>
