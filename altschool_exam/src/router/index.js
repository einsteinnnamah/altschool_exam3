import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import NotFound from "@/views/NotFound.vue";
import RepoDetails from "@/components/GithubWorks/RepoDetails.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/repos/:id",
    name: "RepoDetail",
    component: RepoDetails,
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
