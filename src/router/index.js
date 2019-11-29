import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import firebase from "firebase";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: "/signup",
      name: "Signup",
      component: () =>
        import(/* webpackChunkName: "signup" */ "../views/Signup.vue")
    },
    {
      path: "/signin",
      name: "Signin",
      component: () =>
        import(/* webpackChunkName: "signin" */ "../views/Signin.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      path: "/booklist",
      name: "booklist",
      component: () =>
        import(/* webpackChunkName: "booklist" */ "../views/BookList.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/addbook",
      name: "addbook",
      component: () =>
        import(/* webpackChunkName: "addbook" */ "../views/AddBook.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/booklist/editbook/:id",
      name: "editbook",
      component: () =>
        import(/* webpackChunkName: "addbook" */ "../views/editbook.vue"),
      meta: { requiresAuth: true },
      props: route => ({
        value: Number(route.params.id)
      })
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        next();
      } else {
        next({
          path: "/signin",
          query: { redirect: to.fullPath }
        });
      }
    });
  } else {
    next();
  }
});

export default router;
