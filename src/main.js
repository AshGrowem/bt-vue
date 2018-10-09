import Vue from 'vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import App from './App.vue'
import { Plugin } from 'vue-fragments'
import VueMDCTextField from 'vue-mdc-adapter/textfield' // mixin is broken, so we need to globally load it
import VueMDCIconToggle from 'vue-mdc-adapter/icon-toggle' // mixin is broken, so we need to globally load it
Vue.use(VueMDCTextField)
Vue.use(VueMDCIconToggle)
Vue.use(Plugin)

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
