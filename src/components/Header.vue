<template>
  <header>
    <h1>Emerson Sinézio</h1>
    <div class="menu">
      <button @click="toggleDrop">Click</button>
      <div :class="[ 'drop', showMenu ? 'show' : 'hidden' ]">
        <a href="https://github.com/EmersonSinezio">Github</a>
        <a href="https://www.linkedin.com/in/emerson-sineziio">Linkedin</a>
      </div>
    </div>
    <div class="links">
      <a href="https://github.com/EmersonSinezio">Github</a>
      <a href="https://www.linkedin.com/in/emerson-sineziio">Linkedin</a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleDrop() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

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

.links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem;
}
.drop{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 10vh;
  width: 22vw;
  height: 10vh;
  border: 1px solid gray;
  font-size: 1rem;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.menu button:hover{
  background-color: transparent;
  border-color: #fff;
}
.drop a{
  margin: .2rem auto;
}
.menu{
  display: none;
}
.menu button{
  padding: .3rem 1rem;
  border-radius: .4rem;
  background-color: #333;
  color: white;
  border: 1px solid gray;
}
.show {
  opacity: 1;
}

.hidden {
  opacity: 0;
}
@media (max-width: 600px) {

  header h1,
  .links {
    font-size: 1rem;
  }
}


@media (max-width:400px) {
  .links{
    display: none;
  }
  .menu{
    display: 	block;
  }
}
</style>
