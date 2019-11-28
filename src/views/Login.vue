<template>
  <v-container fluid style="height:100%">
    <v-row class="d-flex justify-center align-content-center" style="height:100%">
      <v-col cols="4">
        <v-form v-model="valid" ref="form">
          <v-text-field
            v-model= "email"
            :rules= "emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            type= "password"
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
          <v-btn class="ma-2" rounded color="purple white--text" @click="submit">Login</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import {required, minLength, isEmail,} from "@/utils/FormRules";


@Component
export default class Register extends Vue {
  get form(): Vue & { validate: () => boolean } {
    return this.$refs.form as Vue & { validate: () => boolean }
  }
// Use

  email = null;
  password = null;
  emailRules = [required(), isEmail()];
  passwordRules = [required(), minLength(8)];
  valid: boolean = false;
  submit(){
    
    this.form;
     if(this.valid){
        console.log("is valid")
     }
  }
  // clear(){
  //   this.$refs.form.reset();
  // }
}
</script>

<style>
</style>