export const routes = [
  {
    path: "/",
    component: () => import("./components/PageHome.vue"),
  },
  {
    path: "/alt",
    component: () => import("./components/PageAlt.vue"),
  },
];
