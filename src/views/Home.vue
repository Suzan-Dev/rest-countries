<template>
  <div class="home">
    <Container>
      <div class="homeActions">
        <SearchField />
        <Filter />
      </div>
      <div class="countryList">
        <div v-for="country in countries" :key="country.name">
          <CountryCard :country="country" />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "../components/Container.vue";
import SearchField from "../components/SearchField.vue";
import Filter from "../components/Filter.vue";
import CountryCard from "../components/CountryCard.vue";

export default {
  data() {
    return {
      countries: [],
    };
  },
  components: { Container, SearchField, Filter, CountryCard },
  async mounted() {
    const res = await fetch(
      "https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital"
    );
    const data = await res.json();

    this.countries = data;
  },
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

.countryList {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.countryList > div {
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
