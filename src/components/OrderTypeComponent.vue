<template>
  <div>
    <label
      >{{ label }}
      <input
        type="radio"
        value="ASC"
        checked="checkedAsc"
        @change="handleChange"
      />
      <input
        type="radio"
        value="DESC"
        checked="checkedDsc"
        @change="handleChange"
      />
    </label>
  </div>
</template>
<script>
export default {
  props: {
    checkedAsc: Boolean,
    handleChange: Function,
  },
  data() {
    return {
      label: "Order: ",
      checkedDsc: !this.checkedAsc,
    };
  },
};
</script>
