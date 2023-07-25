<template>
  <div class="slider_container">
    <div class="slider_subContainer">
      <h1>Skills</h1>
      <div class="skills_container" :style="{ transform: `translateX(${showSkill}px)` }">
        <div class="skill">
          <img src="../assets/icons/html-5-svgrepo-com.svg" alt="Html_icon">
        </div>
        <div class="skill"> <img src="../assets/icons/css-3-svgrepo-com.svg" alt="Css_icon"></div>
        <div class="skill"> <img src="../assets/icons/icons8-javascript.svg" alt="Javascript_icon"></div>
        <div class="skill"> <img src="../assets/icons/icons8-react.svg" alt="React_icon"></div>
        <div class="skill"><img src="../assets/icons/Sass.svg" alt="Sass_icon"></div>
        <div class="skill"><img src="../assets/icons/icons8-vue-js.svg" alt="Vue_icon"></div>
        <div class="skill"><img src="../assets/icons/nextjs-svgrepo-com.svg" alt="Next_icon"></div>
        <div class="skill"><img src="../assets/icons/icons8-nodejs.svg" alt="Node_icon"></div>
        <div class="skill"><img src="../assets/icons/Mongodb.svg" alt="Mongo_icon"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSkill: 0,
      skillWidth: 200,
      numSkills: 9,
      numVisibleSkills: 3,
      intervalId: null
    };
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 4000); // Ajuste o intervalo conforme a velocidade desejada
    },
    nextSlide() {
      this.showSkill -= this.skillWidth * this.numVisibleSkills;
      if (this.showSkill <= -this.skillWidth * (this.numSkills - this.numVisibleSkills)) {
        this.showSkill = 1;
      }
    }
  }
};
</script>