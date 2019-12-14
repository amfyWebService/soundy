<template>
  <v-row>
    <v-col cols="2" v-for="(playlist, index) in playlists" :key="index">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card>

            <v-img :src="require('@/assets/pochette.jpg')" @click="setPlaylist(playlist)">
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn fab large @click="$emit('click:playlist', playlist)"><v-icon>fa-play</v-icon></v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-img>

            <router-link :to="{name: 'playlist', params: {playlistId: playlist._id}, }" tag="span">
                <v-card-subtitle style="cursor: pointer">
                    {{playlist.name}}
                </v-card-subtitle>
            </router-link>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import MusicList from "@/core/models/MusicList";
import { Mutation } from "vuex-class";

@Component({})
export default class Playlists extends Vue {
  @Prop() playlists: MusicList[];
  @Mutation("changePlaylist") setPlaylist: Function;
}
</script>

<style>
</style>