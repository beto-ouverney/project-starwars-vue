<template>
  <div>
    <button type="button" @click="$emit('clickBtn')">
      {{ labelBtn }}
    </button>
  </div>
</template>

<script>
export default {
  name: "BtnComponent",
  props: {
    labelBtn: String,
  },
};
</script>
