<template>
  <div class="projects_container">
    <div class="projects_subContainer">
      <div :class="`project_container ${show}`">
        <div class="project">
          <div class="project_image">
            <img src="../assets/games_homepage.png" alt="project_games">
          </div>
          <div>
            <h3>Projeto Games</h3>
            <p>Bem-vindo ao universo épico dos games! Descubra as aventuras de God of War, enfrente os horrores de A
              Plague Tale: Requiem e mergulhe na ação de GTA 5. Seja você um jogador casual ou hardcore, nosso site é o
              destino perfeito para os apaixonados por jogos.</p>
            <button>Visitar</button>
          </div>
        </div>
        <div class="project">
          <div class="project_image">
            <img src="../assets/sneakers_homepage.png" alt="">
          </div>
          <div>
            <h3>Projeto Sneakers</h3>
            <p>Descubra o mundo dos sapatos dos sonhos! Encontre o par perfeito para cada ocasião. De confortáveis a
              estilosos, nosso e-commerce tem tudo que você precisa para arrasar no look. Não perca mais tempo, venha
              explorar a coleção exclusiva de sapatos em nosso site agora</p>
            <button>Visitar</button>
          </div>
        </div>
      </div>
      <div :class="`project_container ${show2}`">
        <div class="project">
          <div class="project_image">
            <img src="../assets/Foody_home.png" alt="">
          </div>
          <div>
            <h3>Projeto Foody</h3>
            <p>Explore sabores irresistíveis! Delicie-se com nossa seleção de pratos gourmet, receitas tradicionais e guloseimas únicas. Uma experiência gastronômica que vai encantar seus sentidos. Visite agora e embarque em uma jornada culinária inesquecível</p>
            <button>Visitar</button>
          </div>
        </div>
        <div class="project">
          <div class="project_image">img</div>
          <div>
            <h3>Description</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit dolores quos praesentium
              similique
              inventore ab?</p>
            <button>Visitar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showActive: true,
      showActive2: true,
    };
  },
  methods: {
    changeActive() {
      if (window.scrollY < 680) {
        this.showActive = false;
      } else {
        this.showActive = true
      }
      if (window.scrollY < 1230) {
        this.showActive2 = false
      } else {
        this.showActive2 = true
      }
    },
  },
  computed: {
    show() {
      return this.showActive ? 'show' : 'hidden';
    },
    show2() {
      return this.showActive2 ? 'show' : 'hidden';
    },
  },
  created() {
    window.addEventListener('scroll', this.changeActive);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.changeActive);
  },
};
</script>