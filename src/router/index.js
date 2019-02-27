
// import HomePage from '../page/login/home.vue'
// import login from '../page/login/login.vue'
// import index from '../page/login/index.vue'


export default {

  routes: [

    {
      path: '/HomePage',
      component: () => import('../page/login/home.vue'),
      children: [
        {
          path: '/',
          redirect: '/index',
        },
        {
          path: '/index',
          component: () => import('../page/login/index.vue'),
        },
        {
          path: '/toLogin',
          component: () => import('../page/login/login.vue'),
        }
      ]
    },
  ]
}
