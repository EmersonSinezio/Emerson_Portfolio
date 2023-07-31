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
              <a href="https://games-store-eta.vercel.app/#/" target="blank">
                <button>Visitar</button>
              </a>
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
              <a href="https://sneakers-opal-alpha.vercel.app" target="blank">
                <button>Visitar</button>
              </a>
          </div>
        </div>
      </div>
      <div :class="`project_container ${show2}`">
        <div class="project">
          <div class="project_image">
            <img src="../assets/Foody_home.png" alt="Foody_image">
          </div>
          <div>
            <h3>Projeto Foody</h3>
            <p>Explore sabores irresistíveis! Delicie-se com nossa seleção de pratos gourmet, receitas tradicionais e
              guloseimas únicas. Uma experiência gastronômica que vai encantar seus sentidos. Visite agora e embarque em
              uma jornada culinária inesquecível</p>
              <a href="https://foody-pearl-alpha.vercel.app" target="blank">
                <button>Visitar</button>
              </a>
          </div>
        </div>
        <div class="project">
          <div class="project_image">
            <img src="../assets/clock_homepage.png" alt="clock_project">
          </div>
          <div>
            <h3>Projeto Clock</h3>
            <p>Bem-vindo ao Projeto Clock, um projeto encantador que vai além de um simples relógio. O Clock oferece um cronômetro preciso e um timer embutido,
              tornando-o perfeito para medir o tempo em atividades desafiadoras ou momentos de lazer, mantendo seu foco e
              produtividade em alta.</p>
            <a href="https://clock-three-kappa.vercel.app" target="blank">
              <button>Visitar</button>
            </a>
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