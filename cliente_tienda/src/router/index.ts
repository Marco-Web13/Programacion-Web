import PersonalVue from '@/modulos/personal/vistas/PersonalVue.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PersonalEditarVue from '@/modulos/personal/vistas/PersonalEditarVue.vue'
import PersonalBorrarVue from '@/modulos/personal/vistas/PersonalBorrarVue.vue'
import PersonalAgregarVue from '@/modulos/personal/vistas/PersonalAgregarVue.vue'
import BienvenidaVue from '@/modulos/principal/vistas/BienvenidaVue.vue'
import SignUpVue from '@/modulos/autentica/vistas/SignUpVue.vue'

const router = createRouter({  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    
    {
      path: '/personal',
      name: 'personal',
      component: PersonalVue,
    },
    {
      path: '/personal/agregar',
      name: 'personalagregar',
      component: PersonalAgregarVue,
    },
    {
      path: '/personal/:id/editar',
      name: 'personaleditar',
      component: PersonalEditarVue,
    },
    {
      path: '/personal/:id/borrar',
      name: 'personalborrar',
      component: PersonalBorrarVue,
    },
    {
      path: '/bienvenida',
      name: 'bienvenida',
      component: BienvenidaVue,
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: SignUpVue,
    },
  ],
})

export default router
