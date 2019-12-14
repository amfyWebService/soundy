<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col cols="3">
        <v-card class="pa-2" tile outlined>
          <v-img :src="require('@/assets/pochette.jpg')"></v-img>
        </v-card>
      </v-col>
      <v-col cols="6" offset="1">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">Name</th>
                <th class="text-center">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="track in playlist.tracks" :key="track._id" @click.stop="play(track)" :class="[track === currentTrack ? 'selected':'']">
                <td>{{ track.title }}</td>
                <td>{{ track.duration || "00:00" }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";
import MusicList from '@/core/models/MusicList';
import Track from '@/core/models/Track';

@Component
export default class PlayList extends Vue {
  @Prop() playlist: MusicList;
  @Prop() currentTrack?: Track;

  play(track: Track) {
    this.$emit("click:track", track);
  }
}
</script>

<style scoped>
.selected {
  background-color: red;
}
</style>