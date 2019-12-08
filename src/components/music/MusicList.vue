<template>
<div class="player">
    <div style="display:none">
        <audio id="player" :src="currentMusic" ref="audio" @playing="_onAudioPlay" @pause="_onAudioPause" @timeupdate="setCurrentTime()"></audio>
    </div>
    <div class="play-grid">
        <div class="time-controls">
            <div class="duration">{{currentTime | convertTime}}</div>
            <v-slider
                :value="currentTime"
                @change="audio.currentTime = $event"
                hide-details
                :min="0"
                :max="totalDuration"
                :step="0"
            ></v-slider>
            <div class="duration">{{totalDuration | convertTime}}</div>
        </div>

        <div class="play-controls">
            <v-btn @click="previousMusic" fab :disabled="!canPreviousMusic"><v-icon class="fas fa-step-backward"></v-icon></v-btn>
            <v-btn @click="playPause" fab><v-icon :class="['fas', !isPlaying ? 'fa-play' : 'fa-pause']"></v-icon></v-btn>
            <v-btn @click="nextMusic" fab :disabled="!canNextMusic"><v-icon class="fas fa-step-forward"></v-icon></v-btn>
        </div>
        
        <div class="volume-controls">
            <v-btn @click="mute" fab small><v-icon :class="['fas', volume === 0  ? 'fa-volume-up' : 'fa-volume-mute']"></v-icon></v-btn>
            <v-slider
                hide-details
                v-model="volume"
                append-icon="fas fa-volume-up"
                prepend-icon="fas fa-volume-down"
                :min="0"
                :max="100"
            ></v-slider>
        </div>        
    </div>
</div>
</template>

<script lang="ts">
import {Component, Vue, Watch, Prop} from 'vue-property-decorator';

@Component
export default class MusicList extends Vue{
    @Prop() playlist: string[];
    playlistIndex: number = 0;
    audio: HTMLMediaElement;
    isPlaying = false;
    totalDuration: number = 0.0;
    volume: number = 1;
    oldVolume: number = 0;
    currentTime: number = 0;
   
    mounted(){   
        this.audio = <HTMLMediaElement> this.$refs.audio;
        this.volume = 100;
    }

    async playPause(){
        if(!this.isPlaying){
            await this.audio.play();
        } else {
            this.audio.pause();
        }
    }
    _onAudioPlay(event: Event){
        this.totalDuration = this.audio.duration
        this.isPlaying = true;
    }

    _onAudioPause(event: Event){
        this.isPlaying = false;
        console.log(event);
        if(this.audio.ended){
            this.nextMusic();

        }
    }

    setCurrentTime(){
        this.currentTime = this.audio.currentTime;
    }

    @Watch('volume') 
    setVolume(value:number , oldValue:number){
        this.audio.volume = value / 100;
        this.oldVolume = oldValue
    }

    mute(){
        this.volume = this.volume === 0 ? this.oldVolume : 0
    }

    previousMusic(){
        if(this.canPreviousMusic){
            this.audio.pause();
            this.playlistIndex--;
            this.$nextTick(() =>{ 
                this.audio.play()
            });
        }
    }

    get canPreviousMusic(){
        return this.playlistIndex > 0;
    }

    async nextMusic(){
        if(this.canNextMusic){
            this.audio.pause();
            this.playlistIndex++;
            await this.$nextTick();
            await this.audio.play();
        }
    }

    get canNextMusic(){
        return this.playlistIndex < this.playlist.length-1
    }

    get currentMusic(){
        return this.playlist[this.playlistIndex];
    }

}
</script>

<style>
    .player{
        width: 100%;
        padding: 5px;
    }

    .play-grid{
        width: 100%;
        display: inline-grid;
        grid-template-columns: 2fr 200px minmax(200px,2fr);
        grid-template-areas: 
            "time-controls time-controls time-controls"
            ". play-controls volume-controls";
        grid-gap: 5px;
    }
    .time-controls{
        grid-area: time-controls;
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
    }
    .play-controls{
        grid-area: play-controls;
        display: inline-flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .volume-controls{
        grid-area: volume-controls;
        display: inline-flex;
        justify-content: flex-end;;
        align-items: center;
        width: 250px;
        justify-self: end;
    
    }
    .duration{
        margin: 0 5px;
    }
</style>