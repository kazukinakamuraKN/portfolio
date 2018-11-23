import Vue from 'vue'
import Router from 'vue-router'
import Snow from '@/components/Snow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
    	  snow: Snow
      }
    }
  ]
})
