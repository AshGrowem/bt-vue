import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueMDCAdapter from 'vue-mdc-adapter'

Vue.config.productionTip = false

Vue.use(VueMDCAdapter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
