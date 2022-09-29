import Vue from 'vue'
import VueRouter from 'vue-router'
import Nprogress from 'nprogress'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/login-employee/LoginEmployeeComponent')
  },
  {
    path: '/create-employee',
    name: 'create',
    component: () => import('../components/create-employee/CreateEmployeeComponent')
  },
  {
    path: '/list-employees',
    name: 'list',
    component: () => import('../components/list-employee/ListEmployeeComponent')
  },
  {
    path: '/edit-employee/:id',
    name: 'update',
    component: () => import('../components/edit-employee/EditEmployeeComponent')
  },
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
