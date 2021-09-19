<template>
  <div class="card" @click="navigateToDetailsPage">
    <div
      class="card-img"
      :style="{
        background: `url(${country.flag}) no-repeat center center/cover`,
      }"
    />
    <div class="card-details">
      <h2>{{ country.name }}</h2>
      <div class="card-secondary-details">
        <p>
          <span>Population: </span> {{ country.population.toLocaleString() }}
        </p>
        <p><span>Region: </span> {{ country.region }}</p>
        <p><span>Capital: </span> {{ country.capital || "N/A" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  props: ["country"],
  setup(props) {
    const router = useRouter();
    const navigateToDetailsPage = () => router.push(props.country.name);

    return { navigateToDetailsPage };
  },
};
</script>

<style scoped>
.card {
  box-shadow: 1px 1px 2.5px rgba(0, 0, 0, 0.1);
  min-width: 300px;
  max-width: 300px;
  background-color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
}

.card-img {
  height: 200px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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