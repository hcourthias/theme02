import Vue from 'vue'
import Router from 'vue-router'
import CurrentWeather from '@/components/CurrentWeather'
import App from '@/App'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/currentWeather/:city',
      name: 'currentWeather',
      component: CurrentWeather
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')