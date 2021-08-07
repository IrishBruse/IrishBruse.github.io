import { createApp } from "vue/dist/vue.cjs.prod";
import App from "./App.vue";
import router from "./router";

import "./assets/css/theme.css";
import "./assets/css/mobile-grid.css";
import "./assets/css/global.css";

createApp(App).use(router).mount("#app");
