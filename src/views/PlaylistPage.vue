<template>
  <playlist :playlist="playlist"></playlist>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import { Getter } from 'vuex-class';
import Playlist from '@/components/music/PlayList.vue';
import MusicList from "@/core/models/MusicList"

@Component({
    components: {
        Playlist
    }
})
export default class PlaylistPage extends Vue {
    @Getter('playlist') playlist: MusicList
}
</script>

<style>

</style>