<template>
  <div>
    <div v-for="(item, index) in array" :key="item">
      <p>{{ `${item.column} ${item.comparasion} ${item.value}` }}</p>
      <button type="button" @click="$emit('remover', index)">Remove</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "FilterSelected",
  props: {
    array: Array,
  },
};
</script>
