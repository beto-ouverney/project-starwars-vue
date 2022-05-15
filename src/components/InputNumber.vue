<template>
  <div>
    <label
      >{{ label }}
      <input type="number" @change="handleChange" />
    </label>
  </div>
</template>
<script>
export default {
  name: "InputNumber",
  props: {
    label: String,
    handleChange: Function,
  },
};
</script>
