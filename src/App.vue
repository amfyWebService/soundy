<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer>
      <music-player v-if="isSignedIn" :playlist="playlist" ref="musicPlayer"></music-player>
    </app-footer>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import MusicPlayer from "@/components/music/MusicPlayer.vue";
import { Getter } from "vuex-class";
import MusicList from './core/models/MusicList';

@Component({
  components: { AppHeader, AppFooter, MusicPlayer }
})
export default class App extends Vue {
  @Getter("playlist") playlist: MusicList;
  @Getter("isSignedIn") isSignedIn: boolean;
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
