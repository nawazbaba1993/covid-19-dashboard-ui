import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

export default [
  { path: "/login", name: "login", component: Login, props: true },
  { path: "/register", name: "register", component: Register, props: true },
  { path: "/home", name: "home", component: Home, props: true },
];
