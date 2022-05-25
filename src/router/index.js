import { createRouter, createWebHashHistory } from "vue-router";

import MainView from "@/views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/components/content/Index.vue"),
      },
      {
        path: "/catalog",
        name: "catalog",
        component: () => import("@/components/content/Catalog.vue"),
      },
      {
        path: "/catalog/:id",
        name: "catalog-item",
        component: () => import("@/components/content/CatalogItem.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/components/content/About.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
