import Vue from 'vue'
import './plugins/vuetify'
import './registerServiceWorker'
import VueMDCIconToggle from 'vue-mdc-adapter/dist/icon-toggle' // mixin is broken, so we need to globally load it
import VueMDCTextField from 'vue-mdc-adapter/dist/textfield' // mixin is broken, so we need to globally load it
import router from './router'
import store from './store'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(VueMDCIconToggle)
Vue.use(VueMDCTextField)

Vue.config.keyCodes = {
  digit1: 49,
  digit2: 50,
  digit3: 51,
  digit4: 52,
}
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

// var vm = new Vue({
//   store,
//   router,
//   render: h => h(App),
// })
// vm.$mount('#app')
