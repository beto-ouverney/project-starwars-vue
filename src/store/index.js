import { createStore } from "vuex";
import axios from "axios";
import * as filtersOrders from "@/utils/Filters";
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
    getPlanets(state) {
      return state.planets;
    },
    getByName(state) {
      return filtersOrders.filterByName(state.data, state.filterByName.name);
    },
    getByOrder(state) {
      return filtersOrders.order(state.order, state.planets);
    },
    getByNumericValues(state) {
      return filtersOrders.filterComparasion(state);
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
    SET_ORDER(state, payload) {
      state.order = payload;
    },
    SET_FILTERS(state, payload) {
      state.filterByNumericValues = payload;
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
          context.commit("SET_LOADING");
          console.log(error);
        });
    },
    setPlanets(context, payload) {
      context.commit("SET_PLANETS", payload);
    },
    setFilters(context, payload) {
      context.commit("SET_FILTERS", payload);
    },
    setOrder(context, payload) {
      context.commit("SET_ORDER", payload);
    },
  },
  modules: {},
});
