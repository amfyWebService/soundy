<template>
<div class="app-auth">
  <router-view style="height: 100%"></router-view>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppAuth extends Vue {

}
</script>

<style scoped>
  .app-auth {
    height: 100%;
  }
</style>