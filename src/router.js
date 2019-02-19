import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Register from "./views/Register";
import Login from "./views/Login";

Vue.use(Router);

import store from './store';

const beforeEnter = (to, from, next) => {
  if(store.state.authModule.logged) next({path: '/'});
  else next();

}

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { auth: false, title: 'Inicio' }
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: { Auth: false, title: 'Registro' },
      beforeEnter: (to, from, next) => beforeEnter(to, from, next)
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { Auth: false, title: 'Iniciar Sesión' },
      beforeEnter: (to, from, next) => beforeEnter(to, from, next)
    }
  ]
});

router.beforeEach((to, from ,next) => {
  document.title = to.meta.title;
  if(to.meta.Auth && !store.state.authModule.logged && store.state.loaded) {
    next({path: '/login'});
  }
  else {
    if(to.meta.role){
      if(store.state.loaded && (to.meta.role !== state.authModule.role)){
        next({path: '/'});
        return;
      }
    }
    next();
  }
  next();
});


export default router;