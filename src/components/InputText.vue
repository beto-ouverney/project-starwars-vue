<template>
  <div>
    <input :value="name" @input="handleChange" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "InputText",
  computed: {
    ...mapState({
      name: (state) => state.filterByName.name,
    }),
  },
  methods: {
    ...mapActions(["setName"]),
    handleChange: function (e) {
      this.setName(e.target.value);
    },
  },
};
</script>
