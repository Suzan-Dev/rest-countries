<template>
  <div class="details">
    <Container>
      <router-link to="/" class="back-btn">
        <ion-icon name="arrow-back-outline" size="small"></ion-icon>
        Back
      </router-link>
      <h2 v-if="!countryDetails">Loading...</h2>
      <div v-else>
        <transition name="details" appear>
          <div class="details-body">
            <div>
              <img :src="countryDetails?.flag" alt="country-flag" />
            </div>
            <div>
              <h1>{{ countryDetails?.name }}</h1>
              <p><b>Native Name :</b> {{ countryDetails?.nativeName }}</p>
              <p>
                <b>Population :</b>
                {{ countryDetails?.population.toLocaleString() }}
              </p>
              <p><b>Region :</b> {{ countryDetails?.region }}</p>
              <p><b>Sub Region :</b> {{ countryDetails?.subregion }}</p>
              <p><b>Capital :</b> {{ countryDetails?.capital }}</p>
              <p><b>Currency :</b> {{ countryDetails?.currencies[0].name }}</p>
              <p v-if="countryDetails?.languages.length">
                <b>Languages : </b>
                <span
                  v-for="language in countryDetails.languages"
                  :key="language.name"
                  >{{ language.name }},
                </span>
              </p>
            </div>
          </div>
        </transition>
      </div>
    </Container>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import Container from "../components/Container.vue";
import { useRoute } from "vue-router";

export default {
  components: { Container },
  setup() {
    const route = useRoute();

    const countryDetails = ref(null);

    onMounted(async () => {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/name/${route.params.countryName}?fullText=true&fields=name;nativeName;population;region;subregion;capital;currencies;languages;flag`
      );
      const data = await res.json();
      countryDetails.value = data[0];
    });

    return { countryDetails };
  },
};
</script>

<style scoped>
.back-btn {
  display: flex;
  width: 100px;
  justify-content: center;
  align-items: center;
  font-size: 0.95rem;
  box-shadow: 1px 1px 2.5px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  font-weight: bold;
  margin: 80px 0;
  background-color: #fff;
  color: #333;
  border-radius: 4px;
  text-decoration: none;
}

.back-btn ion-icon {
  margin-right: 5px;
}

.details-body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.details-body img {
  width: 80%;
  height: 375px;
  object-fit: cover;
}

.details-enter-from {
  opacity: 0;
}

.details-enter-active {
  transition: opacity 1.5s;
}
</style>