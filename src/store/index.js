import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    data: [],
    planets: [],
    isLoading: false,
    filterByName: { name: "" },
    filterByNumericValues: [],
    order: {
      column: "population",
      sort: "ASC",
    },
  },
  getters: {
    getFilterByName(state) {
      return state.filterByName.name;
    },
    getAllPlanetsData(state) {
      return state.data;
    },
    getByName(state) {
      return state.planets.filter((e) =>
        e.name.toLowerCase().includes(state.filterByName.name)
      );
    },
  },
  mutations: {
    SET_NAME(state, payload) {
      state.filterByName.name = payload;
    },
    SET_LOADING(state) {
      state.isLoading = !state.isLoading;
    },
    SET_DATA(state, payload) {
      state.data = payload;
    },
    SET_PLANETS(state, payload) {
      state.planets = payload;
    },
  },
  actions: {
    setName(context, value) {
      context.commit("SET_NAME", value);
    },
    fetchData(context) {
      context.commit("SET_LOADING");
      axios
        .get("https://swapi-trybe.herokuapp.com/api/planets/")
        .then((response) => {
          const { results } = response.data;
          context.commit("SET_LOADING");
          context.commit("SET_DATA", results);
          context.commit("SET_PLANETS", results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setPlanets(context, payload) {
      context.commit("SET_PLANETS", payload);
    },
  },
  modules: {},
});
