import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  VueSweetalert2,
  render: h => h(App)
}).$mount('#app')
