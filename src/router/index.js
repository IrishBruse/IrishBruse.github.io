import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import ProjectTemplate from "../views/ProjectTemplate.vue";
import Projects from "../views/Projects.vue";
import PageNotFound from "../views/404.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/contact",
        name: "Contact",
        title: "Contact",
        component: Contact,
    },
    {
        path: "/projects/:project",
        name: "Project",
        title: "Project",
        component: ProjectTemplate,
    },
    {
        path: "/projects",
        name: "Projects",
        title: "Projects",
        component: Projects,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "PageNotFound",
        title: "Page not found",
        component: PageNotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, _from, next) => {
    document.title = "Ethan Conneely - " + to.name;
    next();
});

export default router;
