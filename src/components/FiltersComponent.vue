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
  </div>
</template>

<script>
import InputText from "@/components/InputText";
import InputNumber from "@/components/InputNumber";
import FilterSelect from "@/components/FilterSelect";

export default {
  name: "FiltersComponent",
  components: {
    InputText,
    InputNumber,
    FilterSelect,
  },
  data() {
    return {
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
};
</script>
