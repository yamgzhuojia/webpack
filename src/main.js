import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter);

import Foo from './Foo.vue'
import Bar from './Bar.vue'
const router=new VueRouter({
routes:[
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
