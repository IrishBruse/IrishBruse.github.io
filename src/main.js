// Transpiler for older browsers
import 'core-js/stable';
// optional but required for transforming generator fns.
import 'regenerator-runtime/runtime';


import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

import { Row, Column, Hidden } from "vue-grid-responsive";
import ModalImage from "./components/ModalImage";
import HideInLauncher from "./components/HideInLauncher";

import "./assets/css/theme.css";
import "./assets/css/global.css";
import "./assets/css/default.css";
import "./assets/css/scrollbar.css";

const app = createApp(App);

app.component("ModalImage", ModalImage);
app.component("HideInLauncher", HideInLauncher);
app.component("Row", Row);
app.component("Col", Column);
app.component("Hidden", Hidden);

app.use(router);
app.mount("#app");
