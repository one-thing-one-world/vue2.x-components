import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import layout from '../views/layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '',
        name: 'home',
        component: home
      },
      {
        path: '/picPreview',
        name: 'picPreview',
        component: () => import('../views/picPreview/picPreview')
      },
      {
        path: '/trend',
        name: 'trend',
        component: () => import('../views/trend/trend.vue')
      },
      {
        path: '/bottomToolBar',
        name: 'bottomToolBar',
        component: () => import('../views/bottomToolBar/bottomToolBar.vue')
      },
      {
        path: '/informIcon',
        name: 'informIcon',
        component: () => import('../views/informIcon/informIcon.vue')
      },
      {
        path: '/inLineWebPages',
        name: 'inLineWebPages',
        component: () => import('../views/inLineWebPages/inLineWebPages.vue')
      },

      {
        path: '/varifycationCode',
        name: 'varifycationCode',
        component: () => import('../views/varifycationCode/varifycationCode.vue')
      },
      {
        path: '/progressBar',
        name: 'progressBar',
        component: () => import('../views/progressBar/progressBar.vue')
      },
      {
        path: '/generateQRcode',
        name: 'generateQRcode',
        component: () => import('../views/generateQRcode/generateQRcode.vue')
      },
      {
        path: '/copyText',
        name: 'copyText',
        component: () => import('../views/copyText/copyText.vue')
      },
      {
        path: '/createWater',
        name: 'createWater',
        component: () => import('../views/createWater/createWater.vue')
      },
      {
        path: '/editText',
        name: 'editText',
        component: () => import('../views/editText/editText.vue')
      }
    ]
  }]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
