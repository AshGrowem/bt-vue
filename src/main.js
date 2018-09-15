import Vue from 'vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import App from './App.vue'
import VueMDCTextField from 'vue-mdc-adapter/textfield' // mixin is broken, so we need to globally load it
Vue.use(VueMDCTextField)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
