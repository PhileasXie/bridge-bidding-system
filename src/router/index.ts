import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'
import Home from '../components/Home.vue'
import OpeningBids from '../components/OpeningBids.vue'
import ClubResponses from '../components/ClubResponses.vue'
import DiamondResponses from '../components/DiamondResponses.vue'
import HeartResponses from '../components/HeartResponses.vue'
import SpadeResponses from '../components/SpadeResponses.vue'
import NoTrumpResponses from '../components/NoTrumpResponses.vue'
import TwoClubResponses from '../components/TwoClubResponses.vue'
import TwoNoTrumpResponses from '../components/TwoNoTrumpResponses.vue'
import PreemptiveOpeningBid from '../components/PreemptiveOpeningBid.vue'
import SlamBids from '../components/SlamBids.vue'
import DefensiveBidding from '../components/DefensiveBidding.vue'
import OpeningLeadAndSignals from '../components/OpeningLeadAndSignals.vue'
import PartnerRotation from '../components/PartnerRotation.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
          name: 'Home'
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
          path: '/heart-responses',
          component: HeartResponses
        },
        {
          path: '/spade-responses',
          component: SpadeResponses
        },

        {
          path: '/notrump-responses',
          component: NoTrumpResponses
        },
        {
          path: '/two-club-responses',
          component: TwoClubResponses
        },
        {
          path: '/two-notrump-responses',
          component: TwoNoTrumpResponses
        },
        {
          path: '/preemptive-opening-bid',
          component: PreemptiveOpeningBid
        },
        {
          path: '/slam-bids',
          component: SlamBids
        },
        {
          path: "/defensive-bidding",
          component: DefensiveBidding
        },
        {
          path: "/opening-lead-and-signals",
          component: OpeningLeadAndSignals
        }
      ]
    },
    // 独立页面 - 不使用 Layout 模板
    {
      path: "/partner-rotation",
      component: PartnerRotation,
      name: 'PartnerRotation'
    }
  ]
})

export default router 