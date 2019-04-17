import Vue from 'vue'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.config.keyCodes = {
  digit1: 49,
  digit2: 50,
  digit3: 51,
  digit4: 52,
}
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')

//  var vm = new Vue({
//   store,
//   router,
//   render: h => h(App),
// })
// vm.$mount('#app')
