<template>
  <nav>
    <router-link to="/">{{ "Home" }}</router-link>
    <router-link to="/about">{{ $t("About") }}</router-link>
    <div>
      <LanguageComponent />
    </div>
  </nav>
  <router-view />
</template>
<script>
import LanguageComponent from "@/components/LanguageComponent";
export default {
  components: {
    LanguageComponent,
  },
};
</script>

<style lang="scss">
* {
  background-color: black;
  color: white;
}
nav {
  display: flex;
  flex-direction: row;
  height: 5%;
  justify-content: center;

  a {
    color: #94a60f;
    font-weight: bold;
    margin: 5px;
    padding: 10px;

    &.router-link-exact-active {
      border: 1px solid #fab700;
      border-radius: 10px;
      color: #fab700;
    }
  }
}

LanguageComponent {
  align-self: left;
  padding: 20px;
}
</style>
