import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSweetAlert2 from 'vue-sweetalert2';
import Vuelidate from 'vuelidate';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../node_modules/nprogress/nprogress.css';

library.add(faUserPlus, faUserEdit, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueSweetAlert2)
Vue.use(Vuelidate)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
