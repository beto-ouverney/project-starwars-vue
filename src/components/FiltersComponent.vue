<template>
  <div>
    <InputText />
    <FilterSelect
      :selected="filterTypes[0]"
      :array="filterTypes"
      :label="labelFilterTypes"
    />
    <FilterSelect
      :selected="comparisonOptions[0]"
      :array="comparisonOptions"
      :label="labelParam"
    />
    <InputNumber />
    <BtnComponent :labelBtn="labelBtnFiltrar" />
    <BtnComponent :labelBtn="labelBtnOrdenar" />
    <BtnComponent :labelBtn="labelBtnRemover" />
  </div>
  <div>
    <TableComponent :array="planets" />
  </div>
</template>

<script>
import InputText from "@/components/InputText";
import InputNumber from "@/components/InputNumber";
import FilterSelect from "@/components/FilterSelect";
import BtnComponent from "@/components/BtnComponent";
import TableComponent from "@/components/TableComponent";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FiltersComponent",
  components: {
    InputText,
    InputNumber,
    FilterSelect,
    BtnComponent,
    TableComponent,
  },
  data() {
    return {
      labelBtnRemover: "Remover",
      labelBtnOrdenar: "Ordenar",
      labelBtnFiltrar: "Filtrar",
      labelNumberParam: "Number Parameter: ",
      labelParam: "Parameter: ",
      comparisonOptions: ["maior que", "menor que", "igual a"],
      labelFilterTypes: "Filter: ",
      filterTypes: [
        "population",
        "orbital_period",
        "diameter",
        "rotation_period",
        "surface_water",
      ],
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
  computed: {
    ...mapGetters({
      planets: "getPlanets",
    }),
  },
  created() {
    this.fetchData();
  },
};
</script>
