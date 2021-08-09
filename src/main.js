import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

import { Row, Column, Hidden } from "vue-grid-responsive";

import "./assets/css/theme.css";
import "./assets/css/global.css";

const app = createApp(App);

app.component("Row", Row);
app.component("Col", Column);
app.component("Hidden", Hidden);

app.use(router);
app.mount("#app");
