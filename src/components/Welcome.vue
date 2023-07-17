<template>
  <div class="welcome">
    <div class="description">
      <!-- animação de escrita -->
      <div class="typing-animation">
    <template v-if="!showFullText">
      <span class="letter" v-for="(letter, index) in text" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">{{ letter }}</span>
    </template>
    <template v-else>
      <span class="full-text">{{ text }}</span>
    </template>
  </div>

  <!-- Img -->
    </div>
    <img src="@/assets/Atronauta.png" alt="Astronauta_Icon" class="img" />
  </div>
</template>
<script>
  export default{
    data() {
    return {
      text: "Hello World! i'm Emerson Sinézio Front-end Developer Seja Bem vindo(a) ao meu Portfolio Pessoal, espero que goste!",
      showFullText: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.showFullText = true;
    }, this.text.length * 100 + 2000);
  }
};
</script>
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
.img:hover {
  animation: 3s infinite pulse;
}
#cargo {
  color: rgb(163, 160, 160);
}
/* Animação de digitar */
.typing-animation {
  display: inline-block;
}

.letter {
  opacity: 0;
  animation: typing 2s linear infinite;
}

.full-text {
  opacity: 0;
  animation: appear 1s forwards;
  animation-delay: 1s;
}

@keyframes typing {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* pulse */
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
