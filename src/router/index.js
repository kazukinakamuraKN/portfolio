import Vue from 'vue'
import Router from 'vue-router'
import Collapse from '@/components/Collapse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Collapse',
      component: Collapse
    }
  ]
})
