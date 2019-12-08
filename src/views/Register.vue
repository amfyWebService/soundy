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
import { Action, Getter } from "vuex-class";
const namespace = "global";
export interface User {
    id?: string;
    mail?: string;
    firstname?: string;
    lastname?: string;
    password?: string;
    description?: string;
    birthday?: string;
    uid?: string;
    userStatus?: string;
}

@Component({})
export default class Register extends Vue {
  @Action("register") register!: any;

  get form(): Vue & { validate: () => boolean } {
    return this.$refs.form as Vue & { validate: () => boolean }
  }
  password = "";
  firstname = "";
  lastname = "";
  email = "";
  birthday = "";
  birthdayRules = [required()];
  firstnameRules  = [required()];
  lastnameRules = [required()];
  emailRules = [required(), isEmail()];
  passwordRules = [required(), minLength(8)];
  valid: boolean = false;
  user:User = {}
  submit(){
    this.form;
    if(this.valid){
      this.user.mail = this.email;
      this.user.password = this.password;
      this.user.birthday = this.birthday;
      this.user.firstname = this.firstname;
      this.user.lastname = this.lastname;
      console.log(this.user)
      this.register(this.user);
    }
  }
  // clear(){
  //   this.$refs.form.reset();
  // }
}
</script>

<style>
</style>