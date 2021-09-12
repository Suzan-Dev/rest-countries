<template>
  <select v-model="filterBy" class="filter">
    <option value="" selected>All</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
</template>

<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const filterBy = ref("");

    watch(filterBy, () => {
      store.dispatch("fetchCountries", { region: filterBy.value });
    });

    return { filterBy };
  },
};
</script>

<style scoped>
.filter {
  padding: 15px 30px;
  border-radius: 5px;
  outline: none;
  box-shadow: 1px 1px 2.5px rgba(0, 0, 0, 0.1);
  border: none;
  background-color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
}
</style>