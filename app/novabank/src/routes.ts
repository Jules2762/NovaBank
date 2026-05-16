import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/auths/Login.vue";
import Register from "./views/auths/Register.vue";
import Otp from "./views/auths/Otp.vue";
import ForgotPassword from "./views/auths/ForgotPassword.vue";
import Dashboard from "./views/home/Dashboard.vue";
import HomeLayouts from "./layouts/HomeLayouts.vue";


const routes = [
    {
        path: "/",
        name: "LOGIN",
        component: Login
    },
    {
        path: "/register",
        name: "REGISTER",
        component: Register
    },
    {
        path: "/otp",
        name: "OTP",
        component: Otp
    }, {
        path: "/forgot-password",
        name: "FORGOT_PASSWORD",
        component: ForgotPassword
    }, {
        path: "/home",
        name: 'HOME',
        component:HomeLayouts,
        redirect:"/home/dashboard",
        children: [{
            path:'dashboard',
            name:"DASHBOARD",
            component:Dashboard
        }]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router