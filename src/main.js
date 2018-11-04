import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyAXZ3y-eI-YM3AXvZZsysTq0Y9FmTeNjfk',
  authDomain: 'emotiwall.firebaseapp.com',
  databaseURL: 'https://emotiwall.firebaseio.com',
  projectId: 'emotiwall',
  storageBucket: 'emotiwall.appspot.com',
  messagingSenderId: '304629041832'
})

// explicit installation required in module environments
Vue.use(VueFire)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
