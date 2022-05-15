<template>
  <div class="home">
    <FiltersComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import FiltersComponent from "@/components/FiltersComponent";

export default {
  name: "HomeView",
  components: {
    FiltersComponent,
  },
};
</script>
