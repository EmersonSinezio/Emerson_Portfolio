<template>
  <div class="skills">
    <h1>Skills</h1>
    <div class="skills-description">
      <div>
        <p>Html</p>
        <span
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
          omnis.</span
        >
      </div>
      <div>
        <p>Css</p>
        <span
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
          omnis</span
        >
      </div>
      <div>
        <p>Javascript</p>
        <span
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
          omnis</span
        >
      </div>
      <div>
        <p>React</p>
        <span
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
          omnis</span
        >
      </div>
      <div>
        <p>Vue</p>
        <span
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
          omnis</span
        >
      </div>
      <div>
        <p>Next</p>
        <span
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
          omnis</span
        >
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
.skills-description p {
  background-color: #333;
  padding: 1rem 1.2rem;
  margin: 0.5rem 2vw;
  border-radius: 0.5rem;
}
</style>
