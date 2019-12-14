import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from '@/plugins/i18n';
import AudioPlayer from './utils/AudioPlayer'
import '@/filters'


Vue.config.productionTip = false;

Vue.prototype.$audioPlayer = new AudioPlayer()

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')

declare module 'vue/types/vue' {
  interface Vue {
    $audioPlayer: AudioPlayer;
  }
}