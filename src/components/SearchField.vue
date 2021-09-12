<template>
  <div class="searchField">
    <ion-icon name="search-outline"></ion-icon>
    <input
      type="text"
      placeholder="Search for a country..."
      v-model="searchTerm"
    />
  </div>
</template>

<script>
import { ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import debounce from "../utils/debounce";

export default {
  setup() {
    const store = useStore();

    const searchTerm = ref("");

    watch(searchTerm, () =>
      debounce(() => {
        store.dispatch("fetchCountries", { name: searchTerm.value });
      })
    );

    return { searchTerm };
  },
};
</script>

<style scoped>
.searchField {
  display: flex;
  align-items: center;
  padding: 15px 30px;
  box-shadow: 1px 1px 2.5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  min-width: 400px;
  background-color: #fff;
}

.searchField > input {
  margin-left: 15px;
  border: none;
  outline: none;
  width: 100%;
  font-size: 0.95rem;
}
</style>