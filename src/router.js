import Vue from 'vue'
import Router from 'vue-router'


import Bread from '@/components/Bread'
import Chocolate from '@/components/Chocolate'
import Milk from '@/components/Milk'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bread',
      name: 'Bread',
      component: Bread
    },
    {
      path: '/chocolate',
      name: 'Chocolate',
      component: Chocolate
    },
    {
      path: '/milk',
      name: 'Milk',
      component: Milk
    }
  ]
})