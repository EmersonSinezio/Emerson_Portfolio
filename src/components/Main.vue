<template>
  <div class="main">
    <Hellcome />
    <Skills />
    <Projects />
  </div>
</template>
<script>
import Hellcome from "./Hellcome.vue";
import Skills from "./Skills.vue";
import Projects from "./Projects.vue";
export default {
  components: {
    Skills,
    Projects,
    Hellcome,
  },
};
</script>
