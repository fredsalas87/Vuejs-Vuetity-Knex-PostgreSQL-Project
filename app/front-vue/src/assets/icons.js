/**
 * arquivo: assets/icons.js
 * descrição: arquivo responsável por lidar com a lógica dos icones na aplicação
 */

import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserPlus, faUserEdit, faTrash, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserPlus, faUserEdit, faTrash, faSignOut)

Vue.component('font-awesome-icon', FontAwesomeIcon)