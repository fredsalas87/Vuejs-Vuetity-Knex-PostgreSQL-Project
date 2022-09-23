import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Create New Employee',
    component: () => import('../components/create-employee/CreateEmployeeComponent')
  },
  {
    path: '/list-employees',
    name: 'List All Employees',
    component: () => import('../components/list-employee/ListEmployeeComponent')
  },
  {
    path: '/edit-employee/:id',
    name: 'Update Employee',
    component: () => import('../components/edit-employee/EditEmployeeComponent')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
