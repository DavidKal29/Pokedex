import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import PokedexView from '@/views/PokedexView.vue'
import PerfilView from '@/views/PerfilView.vue'
import { auth } from '@/db/firebase.js'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    component: PokedexView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilView,
    meta:{requiresAuth:true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  const requiresAuth=to.matched.some((record)=>record.meta.requiresAuth)
  const unsuscribe=auth.onAuthStateChanged((user)=>{
    if (requiresAuth && !user) {//si requiere autenticacion y no hay user
      next({name:'login'})
    }else if(requiresAuth && user && !user.emailVerified){//si requiere autenticacion, hay user, pero no verificacion
      next({name:'login'})
    }else{
      next()
    }
    unsuscribe()
  })
})

export default router
