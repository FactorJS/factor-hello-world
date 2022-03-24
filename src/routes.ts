import { AppRoute } from "@factor/api";

export const routes = [
  new AppRoute({
    key: "home",
    path: "/",
    component: () => import("./components/PageHome.vue"),
  }),
  new AppRoute({
    key: "alt",
    path: "/alt",
    component: () => import("./components/PageAlt.vue"),
  }),
];
