<template>
    <v-container>
        <p v-if="hasError">Une erreur est survenue</p>

        <template v-else>
            <div v-if="!playlists || !playlists.length" class="d-flex justify-center align-center" style="height: 100%;">
                <p>L'utilisateur n'a encore aucune playlist</p>
            </div>
            
            <playlists v-else :playlists="playlists" @click:playlist="playPlaylist"></playlists>
        </template>
        
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import { Getter, Mutation } from 'vuex-class';
import Playlists from '@/components/music/Playlists.vue';
import MusicList from "@/core/models/MusicList";
import PlaylistService from "@/core/services/PlaylistService";
import User from '@/core/models/User';
import { Prop } from 'vue-property-decorator';

@Component({
    components: {
        Playlists
    }
})
export default class PlaylistByUserPage extends Vue {
    playlists: MusicList[] = [];
    hasError = false;
    @Getter("user") user: User;
    @Prop({default: "me"}) userId: string;
    @Mutation("changePlaylist") setPlaylist: Function;

    created(){
        PlaylistService.getByUser(this.userId).then(res => this.playlists = res.data).catch(() => this.hasError = true);
    }

    async playPlaylist(playlist: MusicList){
        this.setPlaylist(playlist);
        // await this.$nextTick();
        // this.$root.$emit("playTrack", playlist);
    }
}
</script>

<style>

</style>