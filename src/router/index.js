import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
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
      import(/* webpackChunkName: "booklist" */ "../views/BookList.vue")
  },
  {
    path: "/addbook",
    name: "addbook",
    component: () =>
      import(/* webpackChunkName: "addbook" */ "../views/AddBook.vue")
  },
  {
    path: "/booklist/editbook/:id",
    name: "editbook",
    component: () =>
      import(/* webpackChunkName: "addbook" */ "../views/editbook.vue"),
    props: route => ({
      value: Number(route.params.id)
    })
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
