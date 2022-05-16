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
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      label: "Order: ",
      valAsc: "ASC",
    };
  },
  computed: {
    ...mapState({
      order: (state) => state.order,
    }),
  },
  methods: {
    ...mapActions(["setOrder"]),
    handleChange(e) {
      this.order.sort = e.target.value;
      this.setOrder(this.order);
    },
  },
};
</script>
