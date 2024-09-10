import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import Alljobsview from "@/view/Alljobsview.vue";
import addJobView from "@/view/addJobView.vue";
import NotFoundView from "@/view/NotFoundView.vue";
import JobDetailView from "@/view/JobDetailView.vue";
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
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFoundView,
    },
    {
      path: "/jobs/:id",
      name: "jobDetail",
      component: JobDetailView,
    },
  ],
});
export default router;
