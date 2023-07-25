<template>
  <div class="container">
    <Header/>
      <Welcome/>
      <Slider/>
      <Projects/>
      <Footer/>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue';
import Header from './components/Header.vue';
import Slider from './components/Slider.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';
  export default{
    components:{
      Welcome,
      Header,
      Slider,
      Projects,
      Footer
    }
  }
</script>