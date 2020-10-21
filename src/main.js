import Vue from 'vue'
import Router from 'vue-router'
import CurrentWeather from '@/components/CurrentWeather'

import App from '@/App'

Vue.use(Router)
Vue.config.productionTip = false

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