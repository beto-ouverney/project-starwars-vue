<template>
  <div class="skills-component">
    <div class="skills">
      <img src="@/assets/minhafoto.jpg" />
      <ol>
        {{
          $t(subtitle)
        }}
        <li>{{ $t(skill1) }}</li>
        <li>{{ $t(skill2) }}</li>
        <li>{{ $t(skill3) }}</li>
        <li>{{ $t(skill4) }}</li>
        <li>{{ $t(skill5) }}</li>
      </ol>
    </div>
    <div class="links">
      <a href="https://www.linkedin.com/in/beto-ouverney-paz/">
        <img src="@/assets/linkedin_logo.png" />{{ $t(myLinkedin) }}</a
      >
      <a href="https://github.com/beto-ouverney"
        ><img src="@/assets/github.svg" />GitHub</a
      >
    </div>
  </div>
</template>
<script>
import "./styles/SkillsComponent.scss";
export default {
  name: "SkillsComponent",
  data() {
    return {
      myLinkedin: "My linkedin, connect to me!",
      subtitle: "Skills used in this project",
      skill1: "State Control with Vuex.js",
      skill2: "Routes with Vue Router",
      skill3: "Internationalization with i18n",
      skill4: "Calls in API",
      skill5: "Styling with SCSS",
    };
  },
};
</script>
