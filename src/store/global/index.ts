import axios from '@/plugins/axios';
import { Module } from 'vuex';
import { RootState } from '../types';
import { SoundyState} from './type';
import User from '@/core/models/User';
import MusicList from '@/core/models/MusicList';

export const state: SoundyState = {
    token: localStorage.getItem('token') || undefined,
    user: JSON.parse(localStorage.getItem('user') || 'null') || undefined ,
    status: false,
    playlist: {tracks: []},
};

const global: Module<SoundyState,RootState> = {
    namespaced: false,
    state: state,
    getters: {
        user(state) {
            return state.user;
        },
        token(state) {
            return state.token;
        },
        isSignedIn(state) {
            return !!state.token;
        },
        playlist(state) {
            return state.playlist;
        }
    },
    
    mutations: {
        onAuthStateChanged(state, data: {token: string, user: User}) {
            state.user = data.user  ;  
            state.token = data.token;  
        },
        onUserStatusChanged(state, status) {
            state.status = status;
        },
        addTrackToPlaylist(state, track){
            state.playlist.tracks.push(track);
        },
        changePlaylist(state, playlist: MusicList){
            state.playlist = JSON.parse(JSON.stringify(playlist));
        }
    },

    actions: {
        async login({commit}, {username, password}):Promise<{token: string, user: User}>{
            try{
                let response = await axios.post('/login',{username, password});

                localStorage.setItem("token" , response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user))
                commit('onAuthStateChanged',response.data);
                
                return response.data;
            } catch (error) {
                console.error(error);
                throw error
            }
        },
        logout({commit}){
            try{
                localStorage.removeItem("token");
                localStorage.removeItem("user")
                commit('onAuthStateChanged', {});
            } catch (error) {
                console.error(error);
                throw error
            }
        },
        register({commit}, user: User): any {
            console.log('fetcchhh')
            axios.post(
                 'http://localhost:8080/api/register',user
            ).then((response) => {
               
            }, (error) => {
                console.log('error', error);
            });
        },
    }
};

export default global;