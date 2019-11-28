<template>
  <v-container fluid style="height:100%">
    <v-row class="d-flex justify-center align-content-center" style="height:100%">
      <v-col cols="4">
        <v-form v-model="valid" ref="form">
          <v-text-field
            v-model="firstname"
            :rules = "firstnameRules"
            label="First name"
            required
          ></v-text-field>
          <v-text-field
            v-model="lastname"
            :rules = "lastnameRules"
            label="Last name"
            required
          ></v-text-field>  
          <v-text-field
            type="date"
            v-model="birthday"
            :rules = "birthdayRules"
            label="Birthday"
            required
          ></v-text-field> 
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
          <v-btn class="ma-2" rounded color="purple white--text" @click="submit">Submit</v-btn>
          <!-- <v-btn @click="clear">Effacer</v-btn> -->
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {required, minLength, isEmail} from "@/utils/FormRules";

@Component
export default class Register extends Vue {
  get form(): Vue & { validate: () => boolean } {
    return this.$refs.form as Vue & { validate: () => boolean }
  }
  password = null;
  firstname = null;
  lastname = null;
  email = null;
  birthday = null;
  birthdayRules = [required()];
  firstnameRules  = [required()];
  lastnameRules = [required()];
  emailRules = [required(), isEmail()];
  passwordRules = [required(), minLength(8)];
  valid: boolean = false;
  submit(){
    console.log(this.email)
    this.form;
    console.log(this.email)
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