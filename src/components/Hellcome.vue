<template>
  <div class="hellcome">
    <div class="description">
      <h1>Hellcome i'm Emerson Sinezio</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nemo
        ab praesentium quasi dicta, beatae soluta aliquid nisi neque laudantium.
      </p>
    </div>
    <div class="img">IMG</div>
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
</style>
