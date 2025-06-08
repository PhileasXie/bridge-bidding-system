import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'
import OpeningBids from '../components/OpeningBids.vue'
import ClubResponses from '../components/ClubResponses.vue'
import DiamondResponses from '../components/DiamondResponses.vue'
import MajorResponses from '../components/MajorResponses.vue'
import NoTrumpResponses from '../components/NoTrumpResponses.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          redirect: '/opening'
        },
        {
          path: '/opening',
          component: OpeningBids
        },
        {
          path: '/club-responses',
          component: ClubResponses
        },
        {
          path: '/diamond-responses',
          component: DiamondResponses
        },
        {
          path: '/major-responses',
          component: MajorResponses
        },
        {
          path: '/notrump-responses',
          component: NoTrumpResponses
        }
        // 其他路由将在后续添加
      ]
    }
  ]
})

export default router 