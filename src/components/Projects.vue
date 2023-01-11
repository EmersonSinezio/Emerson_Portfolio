<template>
  <div class="projects-container">
    <h1>Projects</h1>
    <div class="projects">
      <div>
        <p>Projeto 1</p>
        <span>HTML CSS JS VUE REACT</span>
      </div>
      <div>
        <p>Projeto 2</p>
        <span>HTML CSS JS VUE REACT</span>
      </div>
      <div>
        <p>Projeto 3</p>
        <span>HTML CSS JS VUE REACT</span>
      </div>
      <div>
        <p>Projeto 4</p>
        <span>HTML CSS JS VUE REACT</span>
      </div>
      <div>
        <p>Projeto 5</p>
        <span>HTML CSS JS VUE REACT</span>
      </div>
      <div>
        <p>Projeto 6</p>
        <span>HTML CSS JS VUE REACT</span>
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
</style>
