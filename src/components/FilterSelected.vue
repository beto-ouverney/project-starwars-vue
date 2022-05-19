<template>
  <div class="filter-selected">
    <div v-for="(item, index) in array" :key="item">
      <div class="item-filter-selected">
        <p>
          {{ `${$t(item.column)} ${$t(item.comparasion)} ${item.value}` }}
        </p>
        <button type="button" @click="$emit('remover', index)">
          <img src="../assets/excluir.png" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import "./styles/FilterSelected.scss";
export default {
  name: "FilterSelected",
  props: {
    array: Array,
  },
};
</script>
