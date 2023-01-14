<template>
  <header>
    <h1>Emerson Sinézio</h1>
    <div class="links">
      <a href="https://github.com/EmersonSinezio"> Github </a>
      <a href="https://github.com/EmersonSinezio"> Linkedin</a>
    </div>
  </header>
</template>
<style scoped>
header {
  background-color: #242424;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
}
a {
  text-decoration: none;
  margin: 0 1vw;
  color: #fff;
}
@media (max-width: 600px) {
  header h1,
  .links {
    font-size: 1rem;
  }
}
</style>
