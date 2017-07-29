import Vue from 'vue'
import Router from 'vue-router'
import LayoutList from '@/components/LayoutList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LayoutList',
      component: LayoutList
    }
  ]
})
