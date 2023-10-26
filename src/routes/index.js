import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: '/', component: () => import('../views/Home.vue') },
  { path: '/GruposPesquisa/listarGruposPesquisa', component: () => import('../views/pesquisa/GruposPesquisa.vue') },
  { path: '/IniciacaoCientifica', component: () => import('../views/pesquisa/IniciacaoCientifica.vue') },
  { path: '/anuarioPesquisa/listarAnuarios', component: () => import('../views/pesquisa/AnuarioPesquisa.vue') },
  { path: '/noticia/editais', component: () => import('../views/noticias/Editais.vue') },
  { path: '/noticia/resultados', component: () => import('../views/noticias/Resultados.vue') },
  { path: '/noticia/noticias', component: () => import('../views/noticias/Noticias.vue') },
  { path: '/noticia/ler/id', component: () => import('../views/noticias/LerNoticias.vue') },
  { path: '/noticiaEvento/Eventos', component: () => import('../views/Eventos.vue') },
  { path: '/SobreoNippec', component: () => import('../views/SobreoNippec.vue') },
  { path: '/home/autenticacao', component: () => import('../views/Login.vue') },
  { path: '/cadastrarUsuario', component: () => import('../views/Cadastro.vue') },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthenticated()) {
      next()
      return
    }
    next('/login/adm')
  } else {
    next()
  }
})

export default router;