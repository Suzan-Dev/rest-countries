<template>
  <div class="home">
    <Container>
      <div class="homeActions">
        <SearchField />
        <Filter />
      </div>
      <transition-group name="countries" tag="div" appear class="countryList">
        <div v-for="country in countries" :key="country.name">
          <CountryCard :country="country" />
        </div>
      </transition-group>
    </Container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Container from "../components/Container.vue";
import SearchField from "../components/SearchField.vue";
import Filter from "../components/Filter.vue";
import CountryCard from "../components/CountryCard.vue";

export default {
  components: { Container, SearchField, Filter, CountryCard },
  computed: {
    ...mapState(["countries"]),
  },
  methods: {
    ...mapActions(["fetchCountries"]),
  },
  mounted() {
    this.fetchCountries();
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

.countries-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.countries-enter-active {
  transition: all 0.4s;
}
</style>
