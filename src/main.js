import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as fb from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyD5F-YVK07Sm38C5Ly1rjcF3p8NIa66Cxg',
      authDomain: 'itc-ads-57913.firebaseapp.com',
      databaseURL: 'https://itc-ads-57913.firebaseio.com',
      projectId: 'itc-ads-57913',
      storageBucket: 'itc-ads-57913.appspot.com',
      messagingSenderId: '810900535020',
      appId: '1:810900535020:web:132d131ecaf721e01d17c9',
      measurementId: 'G-1113119L28'
    }

    fb.initializeApp(firebaseConfig)

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
}).$mount('#app')
