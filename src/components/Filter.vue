<template>
  <div class="filter">
    <select name="Filter By Country" v-model="filterBy">
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterBy: "",
    };
  },
};
</script>

<style scoped>
</style>