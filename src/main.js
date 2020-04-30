import Vue from 'vue'
import App from './App.vue'
 import VueRouter from 'vue-router'
import Home from './components/Home.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
 
  ]
})
Vue.config.productionTip = false
 

new Vue({
  render: h => h(App),
  router
   
}).$mount('#app')
