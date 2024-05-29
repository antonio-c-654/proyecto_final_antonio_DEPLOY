import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import('../views/InicioView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/pago/:id',
    name: 'pago',
    component: () => import('../views/PagoView.vue')
  },
  {
    path: '/perfil/:id',
    name: 'perfil',
    component: () => import('../views/PerfilView.vue')
  },
  {
    path: '/politica',
    name: 'politica',
    component: () => import('../views/PoliticaView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue')
  },
  {
    path: '/forgotpass',
    name: 'forgotpass',
    component: () => import('../views/ForgotPassView.vue')
  },
  {
    path: '/pagenotfound',
    name: 'pagenotfound',
    component: () => import('../views/PageNotFoundView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/pagenotfound',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
