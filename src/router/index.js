import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Research from '../views/Research.vue'
import TalkList from '../views/TalkList.vue'
import MatchingList from '../views/MatchingList.vue'
import Introduction from '../views/Introduction.vue'
import Friend from '../views/Friend.vue'
import SendResult from '../views/SendResult.vue'
import List from '../views/List.vue'
import Review from '../views/Review.vue'
import Change from '../views/Change.vue'
import Adopt from '../views/Adopt.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/research',
    name: 'research',
    component: Research
  },
  {
    path: '/talklist',
    name: 'talklist',
    component: TalkList
  },
  {
    path: '/match',
    name: 'matchinglist',
    component: MatchingList
  },
  {
    path: '/friend',
    name: 'friend',
    component: Friend
  },
  {
    path: '/intro',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/send',
    name: 'SendResult',
    component: SendResult
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/review',
    name: 'Review',
    component: Review
  },
  {
    path: '/change',
    name: 'Change',
    component: Change
  },
  {
    path: '/adopt',
    name: 'Adopt',
    component: Adopt
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
