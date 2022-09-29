import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSweetAlert2 from 'vue-sweetalert2';
import Vuelidate from 'vuelidate';
import './assets/icons';
import '../node_modules/nprogress/nprogress.css';

Vue.config.productionTip = false
Vue.use(VueSweetAlert2)
Vue.use(Vuelidate)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')