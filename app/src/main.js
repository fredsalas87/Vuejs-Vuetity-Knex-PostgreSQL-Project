import Vue from 'vue'
import Login from './Login.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(Login)
}).$mount('#app')
