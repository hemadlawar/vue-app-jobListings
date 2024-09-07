import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import Alljobsview from "@/view/Alljobsview.vue";
import addJobView from "@/view/addJobView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.Base_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/allJobs",
      name: "alljobs",
      component: Alljobsview,
    },
    {
      path: "/job/add",
      name: "addjob",
      component: addJobView,
    },
  ],
});
export default router;
