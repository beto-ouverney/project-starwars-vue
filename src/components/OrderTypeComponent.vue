<template>
  <div>
    <p>
      Order:
      <label>
        <input
          type="radio"
          :value="valAsc"
          :checked="order.sort === valAsc"
          @change="handleChange"
        />Asc
      </label>
      <label>
        <input
          type="radio"
          value="DESC"
          :checked="order.sort !== valAsc"
          @change="handleChange"
        />Dsc
      </label>
    </p>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "OrderTypeComponent",
  data() {
    return {
      label: "Order: ",
      valAsc: "ASC",
    };
  },
  methods: {
    ...mapGetters(["getByOrder"]),
    ...mapActions(["setOrder", "setPlanets"]),
    handleChange(e) {
      console.log("TEST");
      this.order.sort = e.target.value;
      console.log(this.order);
      this.setOrder(this.order);
      const newPlanets = this.getByOrder();
      this.setPlanets(newPlanets);
    },
  },
  computed: {
    ...mapState({
      order: (state) => state.order,
    }),
  },
};
</script>
