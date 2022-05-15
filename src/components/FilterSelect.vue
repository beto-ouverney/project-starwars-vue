<template>
  <div>
    <label
      >{{ label }}
      <select :value="selected" @input="handleChange">
        <option v-for="item in array" :value="item" :key="item">
          {{ item }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "FilterSelect",
  props: {
    label: String,
    array: Array,
    selected: String,
    handleChange: Function,
  },
  created() {
    console.log(this.label);
  },
};
</script>
