<template>
    <div>
    <v-app-bar
      color="#191919"
      dark
      app>
    <v-toolbar-title>Soundy</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="text-center" v-if="!isSignedIn">
      <v-btn :to="{name: 'login'}" class="ma-2" rounded color="purple">Login</v-btn>
      <v-btn :to="{name: 'register'}" class="ma-2" rounded color="purple">Register</v-btn>
    </div > 
    <div class="text-center" v-if="isSignedIn" >
      <span>Hello {{user.firstname}}</span>
      <v-btn @click="logout" class="ma-2" rounded color="purple">Logout</v-btn>
    </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import router from '@/router';

@Component
export default class AppHeader extends Vue {
  @Getter('isSignedIn')isSignedIn : boolean;
  @Getter('user')user : any;
  @Action('logout')disconnect: any;

  async logout(){
    this.disconnect();
    await router.push('')
  }
 
}
</script>

<style>
</style>