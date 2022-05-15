<template>
  <table>
    <thead>
      <tr>
        <th v-for="tHead in tHeads" :key="tHead">{{ tHead }}</th>
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
        <td>{{ item.films }}</td>
        <td>{{ item.created }}</td>
        <td>{{ item.edited }}</td>
        <td>{{ item.url }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "TableComponent",
  props: {
    array: Array,
  },
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
        "Films",
        "Created",
        "Edited",
        "URL",
      ],
    };
  },
};
</script>
