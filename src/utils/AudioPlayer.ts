export default class AudioPlayer {
    private audio: HTMLAudioElement;
    private _isPlaying = false;
    private _totalDuration: number = 0;
    private _volume: number = 100;
    private oldVolume: number = 0;

    constructor() {
        this.audio = new Audio();
        this.volume = 100;
        this.audio.addEventListener('play', (event) => this._onAudioPlay(event));
        this.audio.addEventListener('pause', (event) => this._onAudioPlay(event));
    }

    set audioSrc(src: string) {
        // this.audio.src = src;
        this.audio = new Audio(src);
        this.audio.addEventListener('play', (event) => this._onAudioPlay(event));
        this.audio.addEventListener('pause', (event) => this._onAudioPlay(event));
    }

    get isPlaying() {
        return this._isPlaying;
    }

    get totalDuration() {
        return this._totalDuration;
    }

    get volume() {
        return this._volume;
    }

    set volume(value: number) {
        this.oldVolume = this._volume;
        this._volume = value;
        this.audio.volume = value / 100;
    }

    muteUnmute() {
        this.volume = this.volume === 0 ? this.oldVolume : 0
    }

    playPause(forcePlay = false) {
        console.log("fuck of bastard", this.isPlaying); 
        if (!this.isPlaying || forcePlay) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }
    _onAudioPlay(event: Event) {
        this._isPlaying = true;
        this._totalDuration = this.audio.duration;
    }

    _onAudioPause(event: Event) {
        this._isPlaying = false;
    }
}