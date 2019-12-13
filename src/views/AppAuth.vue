<template>
<div class="app-auth">
  <router-view></router-view>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppAuth extends Vue {

}
</script>