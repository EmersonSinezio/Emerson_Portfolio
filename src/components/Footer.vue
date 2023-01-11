<template>
  <footer class="footer">
    <div>
      <h1>Contact</h1>
    </div>
    <div>
      <div class="email">
        <p @click="showEmail = !showEmail">Email</p>
        <span v-if="showEmail">Emerson.sineziio@gmail.com</span>
      </div>
      <div>
        <a href="https://github.com/EmersonSinezio">Linkedin</a>
      </div>
      <div>
        <a href="https://github.com/EmersonSinezio">Github</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      showEmail: false,
    };
  },
};
</script>
<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 90vw;
  min-height: 70vh;
  background-color: #191919;
}
.footer div {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.footer div a,
.footer div p {
  margin: 5vh 0;
  background-color: #333;
  padding: 1rem 1.2rem;
  border-radius: 0.5rem;
}
.footer div p {
  cursor: pointer;
}
.footer div a {
  text-decoration: none;
  color: #fff;
}
.email {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
