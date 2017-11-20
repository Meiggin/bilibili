import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/
import Index from '@/components/index'
import Channel from '@/components/channel'

import Video from '@/components/video'
import a from '@/components/a'
import b from '@/components/b'
import c from '@/components/c'
import d from '@/components/d'
Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/index',
    component: Index
  },
  //第一种
  // {
  //   path:'/video',
  //   component:Video
  // },
  // 
   {
     path:'/video/:meiggin',
     component:Video
   },
  {
    path:'/channel',
    component: Channel,
    children:[
    {
      path:'a',
      component:a
    },
    {
      path:'b',
      component:b
    },
    {
      path:'c',
      component:c
    },
    {
      path:'d',
      component:d
    }
    ]
  },
  {
    path: '*',
    redirect: '/index'
  }
  ]
})
