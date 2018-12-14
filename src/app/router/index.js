import Vue from 'vue'
import VueRouter from 'vue-router'
import Attendance from '../components/Attendance'
import Login from '../components/Login'
import Register from '../components/Register'
import Welcome from '../components/Welcome'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'Welcome',
            component: Welcome
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register
        },
        {
            path: '/Attendance',
            name: 'Attendance',
            component: Attendance
        }
    ]
})