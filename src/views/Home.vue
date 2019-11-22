<template>
<div class="home">
  <v-parallax src="@/assets/singer.jpg" dark style="height:100%">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <v-btn class="ma-2 white--text" rounded color="purple">Get Started</v-btn>
      </v-col>
    </v-row>
  </v-parallax>
  
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  toto: String = "toto";
}
</script>
<style scoped lang="scss">
.home{
  height: 100%;
  .custom-divider {
    margin: 5px 46% 0;
    border: 1px solid purple;
  }
}

</style>