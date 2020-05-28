import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: App}
]

const router = new VueRouter({
  routes: routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
