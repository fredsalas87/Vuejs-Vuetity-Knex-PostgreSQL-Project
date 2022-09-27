import Vue from 'vue'
import VueRouter from 'vue-router'
import Nprogress from 'nprogress'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Create New Employee',
    component: () => import('@/components/create-employee/CreateEmployeeComponent')
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
  },
  {
    path: '/login-employee/:id',
    name: 'Login Employee',
    component: () => import('../components/login-employee/LoginEmployeeComponent')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  if(to.name) {
    Nprogress.start();
  }
  next();
})

router.afterEach((to, from) => {
  Nprogress.done();
})

export default router
