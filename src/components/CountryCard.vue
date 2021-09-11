<template>
  <div class="card">
    <div class="card-img">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
        alt="country-flag"
      />
    </div>
    <div class="card-details">
      <h3>Germany</h3>
      <div class="card-secondary-details">
        <p><span>Population: </span> 12,34,123</p>
        <p><span>Region: </span> Europe</p>
        <p><span>Capital: </span> Berlin</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  box-shadow: 1px 1px 2.5px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  background-color: #fff;
  border-radius: 5px;
}

.card > div {
  max-height: 300px;
}

.card-img > img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
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