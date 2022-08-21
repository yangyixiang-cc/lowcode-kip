import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/404",
    component: () => import("@/views/error/404.vue"),
  },
  {
    path: "/",
    name: "main",
    component: () => import("@/views/Main.vue"),
  },
  {
    path: "/preview",
    component: () => import("@/views/preview/Preview.vue"),
  },
  {
    path: "/import",
    component: () => import("@/views/json-io/ImportJson.vue"),
  },
  {
    path: "/export",
    component: () => import("@/views/json-io/ExportJson.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;