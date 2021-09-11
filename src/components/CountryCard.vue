<template>
  <div class="card">
    <div class="card-img">
      <img :src="country.flag" alt="country-flag" />
    </div>
    <div class="card-details">
      <h3>{{ country.name }}</h3>
      <div class="card-secondary-details">
        <p><span>Population: </span> {{ country.population }}</p>
        <p><span>Region: </span> {{ country.region }}</p>
        <p><span>Capital: </span> {{ country.capital }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["country"],
};
</script>

<style scoped>
.card {
  box-shadow: 1px 1px 2.5px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  background-color: #fff;
  border-radius: 5px;
}

.card-img > img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  object-fit: cover;
}

.card-details {
  padding: 25px;
  padding-top: 10px;
}

.card-secondary-details {
  line-height: 10px;
}

.card-secondary-details span {
  font-weight: 700;
}
</style>