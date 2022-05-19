<template>
  <table class="table-planets">
    <thead>
      <tr>
        <th v-for="tHead in tHeads" :key="tHead">{{ $t(tHead) }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in array" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.rotation_period }}</td>
        <td>{{ item.orbital_period }}</td>
        <td>{{ item.diameter }}</td>
        <td>{{ item.climate }}</td>
        <td>{{ item.gravity }}</td>
        <td>{{ item.terrain }}</td>
        <td>{{ item.surface_water }}</td>
        <td>{{ item.population }}</td>
        <td>{{ item.created }}</td>
        <td>{{ item.edited }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapGetters } from "vuex";
import "./styles/TableComponent.scss";
export default {
  name: "TableComponent",
  data() {
    return {
      tHeads: [
        "Name",
        "Rotation Period",
        "Orbital Period",
        "Diameter",
        "Climate",
        "Gravity",
        "Terrain",
        "Surface Water",
        "Population",
        "Created",
        "Edited",
      ],
    };
  },
  computed: {
    ...mapGetters({
      array: "getPlanets",
    }),
  },
};
</script>
