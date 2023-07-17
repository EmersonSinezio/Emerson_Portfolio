<template>
  <div class="skills">
    <h1>Skills</h1>
    <div
      class="skills-description"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
    >
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
        />
        <p>Html</p>
      </div>
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        />

        <p>Css</p>
      </div>
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />

        <p>Javascript</p>
      </div>
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />

        <p>React</p>
      </div>
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
        />

        <p>Vue</p>
      </div>
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        />
        <p>Next-js</p>
      </div>
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />
        <p>Node</p>
      </div>
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
        />
        <p>Sass</p>
      </div>
      <div>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        />
        <p>MongoDB</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.skills {
  padding: 1rem;
  flex-direction: column;
  border-bottom: 1px solid #333;
  margin: 5vh 0;
}
.skills-description {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  font-size: 0.8rem;
}
.skills,
.skills-description div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.skills-description div {
  flex-direction: column;
}
.skills-description p {
  text-transform: uppercase;
}
.skills-description img {
  background-color: #333;
  padding: 1rem 1.2rem;
  margin: 0.5rem 2vw;
  border-radius: 0.5rem;
  text-transform: uppercase;
  width: 100px;
  height: 100px;
  transition: transform 0.3s ease-in-out;
}
.skills-description img:hover {
  animation: shake 0.5s ease-in-out;
  cursor: pointer;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
}
@media (max-width: 600px) {
  .skills-description img {
    width: 40vw;
    height: 20vh;
  }
  .skills-description {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
