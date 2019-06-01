import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Layout.vue'),
      redirect: '/instance/all',
      children: [{
        path: 'instance/:serviceId',
        component: () => import('@/components/InstanceMain.vue'),
        props: true
      }, {
        path: 'decision',
        component: () => import('@/components/decision/DecisionMain.vue')
      }, {
        path: 'service',
        component: () => import('@/components/ServiceMain.vue')
      }]
    }
  ]
})
