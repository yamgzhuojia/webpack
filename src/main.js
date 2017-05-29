import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter);

import Home from './Home.vue'
import Explorer from './Explorer.vue'
import Cart from './Cart.vue'
import Me from './Me.vue'
const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    { path: '/home', component: Home },
    { path: '/explorer', component:Explorer},
    { path: '/cart', component:Cart},
    { path: '/me', component:Me}
]
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
