<template>
  <div class="projects-container">
    <h1>Projects</h1>
    <div class="projects">
      <div>
        <a href="https://sneakers-green.vercel.app/"
          ><img src="@/assets/Sneakers.png" alt="Sneakers"
        /></a>
        <span> NEXT | NEXT-ROUTER | CSS-MODULES</span>
      </div>
      <div>
        <a href="https://games-store-eta.vercel.app/#/"
          ><img src="@/assets/Games.png" alt="Games_Store_Project"
        /></a>

        <span>VUE | VUEX | VUE-ROUTER | SASS</span>
      </div>
      <div>
        <a href="https://foody-pearl-alpha.vercel.app/#/">
          <img src="@/assets/Foody.png" alt="Food-website" />
        </a>
        <span>VUE-JS | VUEX | VUE-ROUTER | SASS</span>
      </div>
      <div>
        <a href="https://next-quiz-plum.vercel.app/">
          <img src="@/assets/Quizz.png" alt="Quizz" />
        </a>
        <span>NEXT-JS | NEXT-ROUTER | SASS</span>
      </div>
      <div>
        <p>Projeto</p>
        <span>EM DESENVOLVIMENTO</span>
      </div>
      <div>
        <p>Projeto</p>
        <span>EM DESENVOLVIMENTO</span>
      </div>
    </div>
  </div>
</template>
<style>
.projects-container {
  flex-direction: column;
  margin: 10vh 0;
}
.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.projects div {
  flex-direction: column;
}
.projects div img,
.projects div p {
  width: 30vw;
  height: 30vh;
  border: 1px solid gray;
  margin: 3vh 5vw;
  border-radius: 0.5rem;
}
.projects-container,
.projects div,
.projects div p {
  display: flex;
  justify-content: center;
  align-items: center;
}
.projects div span {
  font-size: 0.8rem;
}
@media (max-width: 600px) {
  .projects div span {
    font-size: 0.6rem;
  }
  .projects div {
    margin: 0 5vw;
  }
}
@media (max-width: 450px) {
  .projects div img,
  .projects div p {
    width: 40vw;
    height: 20vh;
    margin: 5vh 0;
  }
}
</style>
