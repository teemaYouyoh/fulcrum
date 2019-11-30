import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";

import App from './components/App.vue'
import Main from './components/Main.vue'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'
import Profile from './components/Profile.vue'
import OnePage from './components/OnePage.vue'
import AddWork from './components/AddWork.vue'

import store from "./store.js";

Vue.use(VueRouter)

const routes = [
    { path : '/', component : Main},
    { path : '/login', component : Login},
    { path : '/logout', component : Logout},
    { path : '/profile/:id', component : Profile},
    { path : '/single-page/:id', component: OnePage},
    { path : '/add-work', component: AddWork}
]

const router = new VueRouter({
    routes
})


new Vue({
    render : h => h(App),
    el : '#app',
    router,
    store
})