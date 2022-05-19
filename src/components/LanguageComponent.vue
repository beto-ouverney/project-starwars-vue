<template>
  <div class="languages">
    <label>
      <select v-model="value" @change="changeLocation(value)">
        <option
          v-for="item in Object.keys(languages)"
          :value="item"
          :key="item"
        >
          {{ item }}
        </option>
      </select>
    </label>
  </div>
</template>
<script>
import "./styles/LanguagesComponent.scss";
export default {
  name: "LangugeComponent",
  data() {
    return {
      languages: { English: "en", Español: "es", Português: "br" },
      value: "English",
    };
  },
  methods: {
    changeLocation(locale) {
      this.$root.$i18n.locale = this.languages[locale];
    },
    getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    },
  },
  created() {
    this.value = this.getKeyByValue(this.languages, this.$root.$i18n.locale);
  },
};
</script>
