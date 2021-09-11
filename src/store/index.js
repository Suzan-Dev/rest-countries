import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      countries: [],
    };
  },
  mutations: {
    updateCountries(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    async fetchCountries(ctx, filterObj) {
      if (filterObj?.name) {
        const res = await fetch(
          `https://restcountries.eu/rest/v2/name/${filterObj.name}`
        );
        const data = await res.json();

        ctx.commit('updateCountries', data.splice(0, 10));
      } else if (filterObj?.region) {
        const res = await fetch(
          `https://restcountries.eu/rest/v2/region/${filterObj.region}`
        );
        const data = await res.json();

        ctx.commit('updateCountries', data.splice(0, 10));
      } else {
        const res = await fetch(
          'https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital'
        );
        const data = await res.json();

        ctx.commit('updateCountries', data.splice(0, 10));
      }
    },
  },
  modules: {},
});
