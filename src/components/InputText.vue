<template>
  <div>
    <label
      >{{ $t(label) }}
      <input :value="name" @input="handleChange" />
    </label>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "InputText",
  props: {
    label: String,
  },
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
