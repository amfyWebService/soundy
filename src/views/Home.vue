<template>
<div class="home">
  <v-parallax v-if="!isSignedIn" src="@/assets/singer.jpg" dark style="height:100%">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <v-btn class="ma-2 white--text" rounded color="purple">Get Started</v-btn>
      </v-col>
    </v-row>
  </v-parallax>
  <play-list v-if="isSignedIn" :playlist="playlist"></play-list>
  <!-- <music-list class="music"></music-list> -->
  
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PlayList from '@/components/music/PlayList.vue';
import { Getter } from 'vuex-class';

@Component({
  components: {PlayList}
})
export default class Home extends Vue {
  toto: String = "toto";
  @Getter('isSignedIn')isSignedIn : boolean;
  @Getter('playlist') playlist: any;

}
</script>
<style scoped lang="scss">
.music{
    position: fixed;
    bottom: 80px;
    width: 100%;
}
.home{
  height: 100%;
  .custom-divider {
    margin: 5px 46% 0;
    border: 1px solid purple;
  }
}

</style>