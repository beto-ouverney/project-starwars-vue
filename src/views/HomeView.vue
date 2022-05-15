<template>
  <div class="home">
    <FiltersComponent />
    <TableComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import FiltersComponent from "@/components/FiltersComponent";
import TableComponent from "@/components/TableComponent";

export default {
  name: "HomeView",
  components: {
    FiltersComponent,
    TableComponent,
  },
};
</script>
