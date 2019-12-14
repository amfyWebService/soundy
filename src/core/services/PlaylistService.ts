import MusicList from '@/core/models/MusicList';
import axios from '@/plugins/axios';

export default class PlayistService {

    static getById(playlistId: string) {
        return axios.get<MusicList>(`/playlists/${playlistId}`);
    }

    static getByUser(userId: string) {
        return axios.get<MusicList[]>(`/playlists/user/${userId}`);
    }

}