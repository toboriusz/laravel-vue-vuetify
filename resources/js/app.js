'use strict'

//IE11 polyfills
import "babel-polyfill"
import 'whatwg-fetch'

import Vue from 'vue'
import router from 'Router'
import store from 'Store'
import Vuetify from 'vuetify'
import App from './App.vue'
import Api from 'Api/Api'
import Auth from 'Api/Auth'

Api.init()
Auth.init(router)

Vue.use(Vuetify)

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
