<template>
  <div>
    <label
      >{{ label }}
      <input type="number" v-model="value" @input="handleChange" />
    </label>
  </div>
</template>
<script>
export default {
  name: "InputNumber",
  props: {
    label: String,
  },
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    handleChange() {
      console.log(this.value);
      this.$emit("updateValue", this.value);
    },
  },
};
</script>
