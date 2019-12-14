import MusicList from '@/core/models/MusicList';
import axios from '@/plugins/axios';

export default class TrackService {

    static getById(trackId: string) {
        return axios.get<MusicList>(`/tracks/${trackId}`);
    }
}