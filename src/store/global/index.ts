import axios from 'axios';
import { Module } from 'vuex';
import { RootState } from '../types';
import { AuthState, User} from './type';

export const state: AuthState = {
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user') || 'null') || undefined ,
    status: false,
    playlist: [
        {url:"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3", name:"the FarsenRap" , duration:"0'27"},
        {url:"https://lasonotheque.org/dossiers/dossier-qualite_mp3/8.mp3", name:"the Tiktok" ,duration:"0'59"},
        {url:"https://www.auboutdufil.com/get.php?fla=https://archive.org/download/punchdeckdestabilized/PunchDeck_Destabilized.mp3", name:"the Beauty" ,duration:"2'14"},
        {url:"https://www.auboutdufil.com/get.php?fla=https://archive.org/download/savfktheimpossible/Savfk_TheImpossible.mp3", name:"the toto" ,duration:"4'33"},
    ],
};

const global: Module<AuthState,RootState> = {
    namespaced: false,
    state: state,
    getters: {
        user(state) {
            return state.user;
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
            state.playlist.push(track);
        },
        changePlaylist(state, playlist){
            state.playlist = JSON.parse(JSON.stringify(playlist));
        }
    },

    actions: {
        async login({commit}, {username, password}):Promise<{token: string, user: User}>{
            try{
                console.log('try', username, password)
                let response = await axios.post(
                    'http://localhost:8080/api/login',{username, password}
                );
                console.log('response', response)
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