<template>
  <header>
    <Container>
      <div class="headerContents">
        <h2>Where in the world?</h2>
        <div>
          <ion-icon name="moon-outline"></ion-icon>
          <p>Dark Mode</p>
        </div>
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "./Container.vue";

export default {
  components: { Container },
};
</script>

<style scoped>
header {
  box-shadow: 0 1px 2.5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.headerContents {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.headerContents > div {
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #444;
  cursor: pointer;
  padding: 0 15px;
}

.headerContents > div > p {
  margin-left: 5px;
}
</style>