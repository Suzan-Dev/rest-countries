<template>
  <select v-model="filterBy" class="filter">
    <option value="" selected>None</option>
    <option value="Africa">Africa</option>
    <option value="America">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
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
.filter {
  padding: 15px 30px;
  border-radius: 5px;
  outline: none;
  box-shadow: 1px 1px 2.5px rgba(0, 0, 0, 0.1);
  border: none;
  background-color: #fff;
  font-size: 0.9rem;
}
</style>