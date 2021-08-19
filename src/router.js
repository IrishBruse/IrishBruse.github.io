import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home/Home.vue";
import Contact from "./pages/Contact/Contact.vue";
import About from "./pages/About/About.vue";
import Projects from "./pages/Projects/Projects.vue";
import ProjectPage from "./pages/Projects/ProjectPage.vue";
import ProjectsGrid from "./pages/Projects/ProjectsGrid.vue";
import Error from "./pages/404.vue";
import Redirect from "./pages/Redirect.vue";

const routes = [
    {
        path: "/",
        name: "Software Developer",
        component: Redirect,
        meta: { index: -1 }
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: { index: 0 },
    },
    {
        path: "/projects",
        name: "Project",
        component: Projects,
        meta: { index: 1 },
        children: [
            {
                path: ':project',
                name: "Project",
                component: ProjectPage,
            },
            {
                path: '',
                name: "Projects",
                component: ProjectsGrid,
            }
        ],
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: { index: 2 },
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: { index: 3 },
    },

    {
        path: "/:pathMatch(.*)*",
        name: "404",
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
