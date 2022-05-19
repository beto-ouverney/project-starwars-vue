<style lang="scss" scopped>
@import "./styles/FiltersComponent";
</style>
<template>
  <div>
    <div class="filters-orders">
      <div class="filter">
        <InputText :label="labelInputText" />
        <FilterSelect
          :array="filterTypes"
          :label="labelFilterTypes"
          @update="column = $event"
        />
        <FilterSelect
          :array="comparisonOptions"
          :label="labelParam"
          @update="comparasion = $event"
        />
        <InputNumber @updateValue="value = $event" :label="labelNumberParam" />
        <BtnComponent :labelBtn="labelBtnFiltrar" @clickBtn="clickFilter()" />
      </div>
      <div class="order">
        <OrderTypeComponent />
        <OrderSelect :array="orderTypes" :label="labelParam" />
      </div>
      <div class="remove">
        <BtnComponent :labelBtn="labelBtnRemove" @click="removeAll()" />
      </div>
    </div>
    <div class="selected">
      <FilterSelected
        :array="filterByNumericValues"
        @remover="removeFilter($event)"
      />
    </div>
  </div>
</template>
<script>
import InputText from "./InputText";
import InputNumber from "./InputNumber";
import FilterSelect from "./FilterSelect";
import FilterSelected from "./FilterSelected";
import BtnComponent from "./BtnComponent";
import OrderTypeComponent from "./OrderTypeComponent";
import OrderSelect from "./OrderSelect";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "FiltersComponent",
  components: {
    InputText,
    InputNumber,
    FilterSelect,
    BtnComponent,
    OrderTypeComponent,
    FilterSelected,
    OrderSelect,
  },
  data() {
    return {
      labelInputText: "Name:",
      labelBtnRemove: "Remove All",
      labelBtnFiltrar: "Filter",
      labelNumberParam: "Number:",
      labelParam: "Parameter:",
      comparisonOptions: ["bigger than", "lesser than", "equal to"],
      labelFilterTypes: "Filter:",
      filterTypes: [
        "population",
        "orbital_period",
        "diameter",
        "rotation_period",
        "surface_water",
      ],
      orderTypes: [
        "population",
        "orbital_period",
        "diameter",
        "rotation_period",
        "surface_water",
      ],
      column: "population",
      comparasion: "bigger than",
      value: 0,
      planets: [],
    };
  },
  computed: {
    ...mapState({
      name: (state) => state.filterByName.name,
      data: (state) => state.data,
      filterByNumericValues: (state) => state.filterByNumericValues,
    }),
  },
  methods: {
    ...mapActions(["fetchData", "setPlanets", "setFilters"]),
    ...mapGetters(["getByName", "getByNumericValues"]),
    clickFilter() {
      const compare = {
        column: this.column,
        comparasion: this.comparasion,
        value: this.value,
      };
      const newfilterTypes = this.filterTypes.filter(
        (el) => el !== this.column
      );
      this.filterTypes = newfilterTypes;
      this.setFilters([...this.filterByNumericValues, compare]);
    },
    removeAll() {
      this.filterTypes = this.orderTypes;
      this.setFilters([]);
    },
    removeFilter(index) {
      const deletedFilter = this.filterByNumericValues[index];
      const newFilter = this.filterByNumericValues.filter(
        (e) => e.column !== deletedFilter.column
      );
      this.setFilters(newFilter);
      this.filterTypes = [...this.filterTypes, deletedFilter.column];
    },
  },
  watch: {
    name() {
      const newPlanets = this.getByName();
      this.setPlanets(newPlanets);
    },
    data() {
      this.planets = this.data;
    },
    filterTypes() {
      this.column = this.filterTypes[0];
    },
    filterByNumericValues() {
      if (!this.filterByNumericValues[0]) {
        this.setPlanets(this.data);
      } else {
        this.setPlanets(this.getByNumericValues());
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
