<template>
  <v-footer color="#191919" dark app padless>
    <template v-if="!$slots.default">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </v-footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component
export default class AppFooter extends Vue {
  icons = [
    "fab fa-facebook-f",
    "fab fa-twitter-square",
    "fab fa-instagram",
    "fab fa-snapchat"
  ];
}
</script>

<style>
</style>