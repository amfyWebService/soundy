import User from '@/core/models/User';
import MusicList from '@/core/models/MusicList';

// export interface User {
//     id?: string;
//     mail?: string;
//     firstName?: string;
//     lastName?: string;
//     password?: string;
//     description?: string;
//     birthday?: string;
//     uid?: string;
//     userStatus?: string;
// }

export interface SoundyState {
    user?: User;
    status: boolean;
    token?: string;
    playlist: MusicList
}