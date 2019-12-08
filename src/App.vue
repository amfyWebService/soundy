<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer>
      <music-list v-if="isSignedIn" :playlist="playlist" ref="musicPlayer"></music-list>
    </app-footer>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import MusicList from "@/components/music/MusicList.vue";
import { Getter } from 'vuex-class';

@Component({
  components: { AppHeader, AppFooter, MusicList}
})
export default class App extends Vue {
  @Getter('playlist') playlist: any;
  @Getter('isSignedIn')isSignedIn : boolean;


  mounted(){
    console.log(this.playlist);
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
