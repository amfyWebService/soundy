<template>
    <div>
    <v-app-bar
      color="#191919"
      dark
      app>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Soundy</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="text-center">
      <v-btn  class="ma-2" rounded color="purple">Login</v-btn>
      <v-btn :to="{name: 'register'}" class="ma-2" rounded color="purple">Register</v-btn>
    </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {}
</script>

<style>
</style>