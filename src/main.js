import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";

import App from './components/App.vue'
import Main from './components/Main.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'

Vue.use(VueRouter)

const routes = [
    { path : '/', component : Main},
    { path : '/login', component : Login},
    { path : '/profile/:id', component : Profile}
]

const router = new VueRouter({
    routes
})

new Vue({
    render : h => h(App),
    el : '#app',
    router,
})