<template>
  <footer class="footer">
    <div>
      <h1 id="contact">Contact</h1>
    </div>
    <div class="contact">
      <div class="email">
        <p @click="showEmail = !showEmail">Email</p>
        <span v-if="showEmail">Emerson.sineziio@gmail.com</span>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/emerson-sineziio">Linkedin</a>
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
.contact {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.contact a,
.contact p {
  margin: 5vh 0;
  background-color: #333;
  padding: 1rem 1.2rem;
  border-radius: 0.5rem;
}
#contact {
  margin-left: 5vw;
}
.contact p {
  cursor: pointer;
}
.contact a {
  text-decoration: none;
  color: #fff;
}
.email {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.contact {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
}
@media (max-width: 450px) {
  .footer {
    display: flex;
    flex-direction: column;
  }
  .footer div {
    margin-top: 5vh;
  }
  .contact div {
    margin-left: 8px;
  }
}
</style>
