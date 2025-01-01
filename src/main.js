import Vue from 'vue'
import './plugins/vuetify'
import axios from 'axios'
import VueMqtt from 'vue-mqtt'
import VueAxios from 'vue-axios'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VueAxios, axios)
Vue.use(VueMqtt, 'ws://' + location.hostname + ':9001', {
  reconnectPeriod: 5000000, 
  clientId:'vue-scoreboard-' + Math.random().toString(16).substr(2, 8), 
  username:'onfield', password:'onfield'
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
