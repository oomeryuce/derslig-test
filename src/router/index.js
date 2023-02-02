import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  mode: "history",
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Events",
        metaTags: [
          {
            name: "description",
            content: "You can find events on this page.",
          },
          {
            property: "og:description",
            content: "You can find events on this page.",
          },
        ],
      },
    },
    {
      path: "/event/:id",
      name: "event",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/EventView.vue"),
    },
    {
      path: "/seats/:id",
      name: "seats",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SeatView.vue"),
    },
    {
      path: "/payment/:id",
      name: "payment",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PaymentView.vue"),
    },
  ],
});

export default router;
