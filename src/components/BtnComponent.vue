<template>
  <div>
    <button type="button" @click="handleClick">
      {{ labelBtn }}
    </button>
  </div>
</template>

<script>
export default {
  name: "BtnComponent",
  props: {
    labelBtn: String,
    handleClick: Function,
  },
};
</script>
