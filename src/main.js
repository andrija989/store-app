import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import AppCustomers from '@/components/AppCustomers'
import AppProducts from '@/components/AppProducts'
import LatestPurchases from '@/components/LatestPurchases'

import AppSingleProduct from '@/components/AppSingleProduct'
import AppProductsSingle from '@/components/AppProductsSingle'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/customers/:id', component:LatestPurchases},
  { path: '/customers', component: AppCustomers },
  { path: '/products/:id',component:AppProductsSingle},
  { path: '/products', component: AppProducts },
 
]


const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')