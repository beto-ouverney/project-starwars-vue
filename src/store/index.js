import { createStore } from "vuex";

export default createStore({
  state: {
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
  },
  mutations: {
    SET_NAME(state, value) {
      state.filterByName.name = value;
    },
  },
  actions: {
    setName(context, value) {
      context.commit("SET_NAME", value);
    },
  },
  modules: {},
});
