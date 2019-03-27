import Vue from "vue";
import VueRouter from "vue-router";
import VueCarousel from "vue-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cadastro from "./pages/Cadastro";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import App from "./App";

Vue.use(VueRouter);
Vue.use(VueCarousel);
const routes = [
    {
        name: "cadastro",
        path: "/cadastro",
        component: Cadastro
    },
    {
        name: "signin",
        path: "/",
        component: SignIn
    },
    {
        name: "home",
        path: "/home",
        component: Home
    }
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

new Vue({
    el: "#app",
    router,
    render: h => h(App)
});
