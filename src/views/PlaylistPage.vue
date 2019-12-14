<template>
    <v-container>
        <playlist v-if="playlist" :playlist="playlist" @click:track="playTrack"></playlist>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import { Getter, Mutation } from 'vuex-class';
import Playlist from '@/components/music/PlayList.vue';
import MusicList from "@/core/models/MusicList"
import { Prop } from 'vue-property-decorator';
import PlayistService from '../core/services/PlaylistService';
import Track from '../core/models/Track';

@Component({
    components: {
        Playlist
    }
})
export default class PlaylistPage extends Vue {
    @Prop() playlistId: string;
    playlist: MusicList|null = null;
    @Mutation("changePlaylist") setPlaylist: Function;
    
    created(){
        PlayistService.getById(this.playlistId).then((res) => this.playlist = res.data);
    }

    async playTrack(track: Track){
        this.setPlaylist(this.playlist);
        await this.$nextTick();
        this.$root.$emit("playTrack", track);
    }
}
</script>

<style>

</style>