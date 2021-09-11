<template>
  <div class="home">
    <Container>
      <div class="homeActions">
        <SearchField />
        <Filter />
      </div>
      <CountryCard />
    </Container>
  </div>
</template>

<script>
import Container from "../components/Container.vue";
import SearchField from "../components/SearchField.vue";
import Filter from "../components/Filter.vue";
import CountryCard from "../components/CountryCard.vue";

export default {
  components: { Container, SearchField, Filter, CountryCard },
};
</script>

<style scoped>
.home {
  min-height: 100px;
}

.homeActions {
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
