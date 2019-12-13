import Track from './Track';

export default interface MusicList {
    _id?: string

    name?: string;

    owner?: string;

    tracks: Track[];
}