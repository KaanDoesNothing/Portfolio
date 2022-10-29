import { createApp } from "vue";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";

import "./style.css";

//@ts-ignore
// import VueTyperPlugin from "vue-auto-writer";

library.add(far);
library.add(fab);
library.add(fas);

dom.watch();

const app = createApp(App);

// app.use(VueTyperPlugin);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app")
