import { createRouter, createWebHistory } from "vue-router";
import ResourceHome from "./views/ResourceHome";
import ResourceNew from "./views/ResourceNew";

const routes = [
  {
    path: "/",
    // redirect: "/ResourceHome"
    redirect: {name: "ResourceHome"}
  },
  {
    path: "/ResourceHome",
    name: "ResourceHome",
    component: ResourceHome
  },
  {
    path: "/ResourceHome/new",
    component: ResourceNew
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active"  //切换路由时切换的class
})

export default router