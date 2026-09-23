import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition){
    if(to.hash){ //hash é o mesmo que id, esse if é para verificar se há o id do elemento
      return{
        el: to.hash,
      }
    }
  }
})

export default router
