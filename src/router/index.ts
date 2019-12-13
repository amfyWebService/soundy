import Vue from 'vue'
import VueRouter, { RouteConfig, NavigationGuard } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import AppAuth from "@/views/AppAuth.vue";
import PlaylistPage from "@/views/PlaylistPage.vue";
import store from '@/store'

const isAuthenticated: NavigationGuard = function(to, from, next){
  if(store.getters.isSignedIn){
    next();
  } else {
    next({name: 'login'});
  }
};

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home_anonymous',
    component: Home,
    beforeEnter(to, from, next){
      if(store.getters.isSignedIn){
        next({name: 'home'});
      } else {
        next();
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter(to, from, next){
      store.dispatch('logout').then(() => {
        next();
      });
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter(to, from, next){
      store.dispatch('logout').then(() => {
        next();
      });
    }
  },
  {
    path: '/logout',
    name: 'logout',
    redirect: "/login"
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: "",
    name: "auth",
    component: AppAuth,
    beforeEnter: isAuthenticated,
    children: [
      {
        path: "",
        name: "home",
        redirect: "/home"
      },
      {
        path: "/playlists/user/:id",
        name: "playlists-user"

      },
      {
        path: "/playlist",
        alias: "/home",
        name: "playlist",
        component: PlaylistPage,
        // children: [
        //   {
        //     path: "",
        //     name: "current_playlist",
        //     component: CurrentPlaylistPage,
        //   },
        //   {
        //     path: "/user/:id",
        //     name: "playlist_by_user",
        //     component: PlaylistByUserPage,
        //   },
        // ]
      },
      {
        path: "*",
        name: "404",
        redirect: "/"
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
