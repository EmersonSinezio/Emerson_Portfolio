<template>
  <div class="main">
    <Welcome />
    <Skills />
    <Projects />
  </div>
</template>
<script>
import Welcome from "./Welcome.vue";
import Skills from "./Skills.vue";
import Projects from "./Projects.vue";
export default {
  components: {
    Skills,
    Projects,
    Welcome,
  },
};
</script>
