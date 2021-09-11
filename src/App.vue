<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: { Header },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,600;0,800;1,300;1,600;1,800&display=swap");

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Nunito Sans", sans-serif;
  background-color: hsl(0, 0%, 98%);
}

#app {
  color: hsl(200, 15%, 8%);
  font-size: 16px;
}

ion-icon {
  font-size: 24px;
}
</style>
