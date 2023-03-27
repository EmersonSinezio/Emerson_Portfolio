<template>
  <div class="welcome">
    <div class="description">
      <h1>Hello World! i'm Emerson Sinézio</h1>
      <p id="cargo">Front-end Developer</p>
      <p>
        Seja Bem vindo(a) ao meu Portfolio Pessoal, espero que goste!
      </p>
    </div>
    <img src="@/assets/Atronauta.png" alt="Astronauta_Icon" class="img" />
  </div>
</template>
<style scoped>
.welcome {
  width: 100%;
  height: 90vh;
  border-bottom: 1px solid #333;
  margin-bottom: 5vh;
}
.description {
  flex-direction: column;
}
.description,
.img,
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.description,
.img {
  width: 45%;
  height: 95%;
}
.img {
  animation: 3s infinite pulse;
}
#cargo {
  color: rgb(163, 160, 160);
}
@keyframes pulse {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
}
@media (max-width: 600px) {
  .img {
    display: none;
  }
  .description {
    width: 80vw;
  }
}
</style>
