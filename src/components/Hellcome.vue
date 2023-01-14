<template>
  <div class="hellcome">
    <div class="description">
      <h1>Hello World! i'm Emerson Sinezio</h1>
      <p id="cargo">Front-end Developer</p>
      <p>
        Sejam Bem vindos ao meu Portfólio Pessoal, me apaixonei pela área de
        tecnologia por gostar muito de games e acabei me deparando com essa área
        incrível
      </p>
    </div>
    <img src="@/assets/Atronauta.png" alt="Astronauta_Icon" class="img" />
  </div>
</template>
<style scoped>
.hellcome {
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
.hellcome {
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
