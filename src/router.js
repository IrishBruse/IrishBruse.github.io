import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home/Home.vue";
import Redirect from "./pages/Home/Redirect.vue";
import Contact from "./pages/Contact/Contact.vue";
import About from "./pages/About/About.vue";
import ProjectPage from "./pages/Projects/ProjectPage.vue";
import Projects from "./pages/Projects/Projects.vue";
import Error from "./pages/404.vue";

const routes = [
    {
        path: "/",
        name: "Redirect",
        title: "Redirect",
        component: Redirect,
    },
    {
        path: "/home",
        name: "Home ",
        title: "Home ",
        component: Home,
        meta: { index: 0 },
    },
    {
        path: "/projects",
        name: "Projects",
        title: "Projects",
        component: Projects,
        meta: { index: 1 },
    },
    {
        path: "/about",
        name: "About",
        title: "About",
        component: About,
        meta: { index: 2 },
    },
    {
        path: "/contact",
        name: "Contact",
        title: "Contact",
        component: Contact,
        meta: { index: 3 },
    },
    {
        path: "/projects/:project",
        name: "Project",
        title: "Project",
        component: ProjectPage,
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
