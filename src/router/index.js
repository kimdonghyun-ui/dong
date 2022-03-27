import Vue from 'vue'
// 임시 Component
import HelloWorld from '../components/HelloWorld.vue'


// Import Vue Router
import VueRouter from 'vue-router';

// 플러그인 형태의 VueRouter 등록
Vue.use(VueRouter);


// 라우터 객체 생성
const router = new VueRouter({
  mode: 'history',
  routes: [
    {     
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})


export default router
