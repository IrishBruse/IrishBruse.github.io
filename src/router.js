import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home/Home.vue";
import Contact from "./pages/Contact/Contact.vue";
import Project from "./pages/Projects/Project.vue";
import Projects from "./pages/Projects/Projects.vue";
import Error from "./pages/404.vue";

const routes = [
    {
        path: "/",
        name: "Home ",
        title: "Home ",
        component: Home,
    },
    {
        path: "/home",
        name: "Home",
        title: "Home",
        component: Home,
    },
    {
        path: "/contact",
        name: "Contact",
        title: "Contact",
        component: Contact,
    },
    {
        path: "/projects/",
        name: "Projects",
        title: "Projects",
        component: Projects,
    },
    {
        path: "/projects/:project",
        name: "Project",
        title: "Project",
        component: Project,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        title: "Error",
        component: Error,
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
