import AudioPlayer from '@/utils/AudioPlayer';

export interface User {
    id?: string;
    mail?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    description?: string;
    birthday?: string;
    uid?: string;
    userStatus?: string;
}

export interface AuthState {
    user?: User;
    status: boolean;
    token?: string;
    playlist: object[]// temporary, after define a model Playlist
}