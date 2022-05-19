<template>
  <div class="about">
    <SkillsComponent />
  </div>
</template>
<script>
import SkillsComponent from "@/components/SkillsComponent";
export default {
  components: {
    SkillsComponent,
  },
  data() {
    return { myLinkedin: "My linkedin, connect to me!" };
  },
};
</script>
