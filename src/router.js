import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Timetable from "./pages/Timetable";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/Projects/ProjectPage.vue";
import ProjectsGrid from "./pages/Projects/ProjectsGrid.vue";
import Error from "./pages/404.vue";

const routes = [
    {
        path: "/home",
        alias: ["/", "/home"],
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
            },
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
        path: "/timetable/:class",
        name: "Timetable",
        component: Timetable,
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
