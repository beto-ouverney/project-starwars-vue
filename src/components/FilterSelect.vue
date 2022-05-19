<template>
  <div>
    <label
      >{{ $t(label)
      }}<select v-model="value" @change="handleChange">
        <option v-for="item in array" :value="item" :key="item">
          {{ $t(item) }}
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
  },
  data() {
    return {
      value: this.array[0],
    };
  },
  watch: {
    array() {
      this.value = this.array[0];
    },
  },
  methods: {
    handleChange() {
      console.log(this.value);
      this.$emit("update", this.value);
    },
  },
};
</script>
