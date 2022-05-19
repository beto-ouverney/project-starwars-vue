<template>
  <div>
    <label
      >{{ $t(label) }}
      <select v-model="value" @change="handleChange">
        <option v-for="item in array" :value="item" :key="item">
          {{ $t(item) }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "OrderSelect",
  props: {
    label: String,
    array: Array,
  },
  data() {
    return {
      value: this.array[0],
    };
  },
  computed: {
    ...mapState({
      order: (state) => state.order,
    }),
  },
  methods: {
    ...mapGetters(["getByOrder"]),
    ...mapActions(["setOrder", "setPlanets"]),
    handleChange() {
      this.order.column = this.value;
      this.setOrder(this.order);
      const newPlanets = this.getByOrder();
      this.setPlanets(newPlanets);
    },
  },
};
</script>
