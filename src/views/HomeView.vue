<template>
  <div class="home">
    <FiltersComponent />
    <TableComponent />
    <LoadingComponent :show="isLoading" />
  </div>
</template>

<script>
// @ is an alias to /src
import FiltersComponent from "@/components/FiltersComponent";
import TableComponent from "@/components/TableComponent";
import LoadingComponent from "@/components/LoadingComponent";
import { mapState } from "vuex";
export default {
  name: "HomeView",
  components: {
    FiltersComponent,
    TableComponent,
    LoadingComponent,
  },
  computed: {
    ...mapState(["isLoading"]),
  },
};
</script>
