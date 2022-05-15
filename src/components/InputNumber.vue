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
  props: {
    label: String,
    handleChange: Function,
  },
};
</script>
