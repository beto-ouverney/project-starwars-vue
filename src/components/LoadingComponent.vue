<template>
  <div v-show="show">
    <p>{{ $t("Loading...") }}</p>
  </div>
</template>
<script>
export default {
  props: {
    show: Boolean,
  },
  created() {
    console.log(this.show);
    console.log("LOAADINIDD");
  },
};
</script>
