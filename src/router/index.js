/**
 * Created by Administrator on 2018/1/17 0017.
 */
import HomePage from '../page/login/home.vue'
import login from '../page/login/login.vue'
import index from '../page/login/index.vue'


export  default {

  routes:[

    {
      path:'/HomePage',
      component:HomePage,
      children:[

        {
          path:'/',
          component:index
        },
        {
          path:'/index',
          component:index
        },
        {
          path:'/toLogin',
          component:login
        }
      ]
    },
  ]
}
