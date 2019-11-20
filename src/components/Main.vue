<template>
    <div>
        <!--Preloader-->

        <div class="preloader" id="preloader">
            <div class="item">
            <div class="spinner">
            </div>
            </div>
        </div>

        <div class="opacity-nav">

                <div class="menu-index" id="buttons" style="z-index:999999">
                <i class="fa  fa-close"></i>
                </div>

            <ul class="menu-fullscreen">
            <li><a class="ajax-link" href="">Home</a></li>
            <li><a class="ajax-link" href="">Search</a></li>
            <li><a class="ajax-link" href="">Login</a></li>
            <li><a class="ajax-link" href="">Sign up</a></li>
            </ul>

        </div>

        <!--Header-->
        <header id="fullscreen">
            
            <div class="logo" id="full" style="display:none;"><a class="ajax-link" href="index.html">FULCRUM</a></div>
        
            <div class="menu-index" style="display:none;" id="button">
                <i class="fa fa-bars"></i>
            </div>

        </header>
        <!--Header-->
        <header class="boxed" id="header-white">

        <div class="header-margin">
        
            <div class="logo"><a href="index.html">FULCRUM</a></div>
            <ul class="header-nav">
            <li><a class="ajax-link" href="#">Search</a>
                <ul>
                <li><a class="ajax-link" href="#">Authors</a></li> 
                <li><a class="ajax-link" href="#">Books</a></li> 
                <li><a class="ajax-link" href="#">Poems</a></li> 
                <li><a class="ajax-link" href="#">Articles</a></li>         
                </ul>
            </li>
            
            <li><a class="ajax-link" href="#">Home</a>
            </li>
            <li><a class="ajax-link" href="#" style="margin-left: 210px">Login</a></li>
            <li><a class="ajax-link" href="#">Sign up</a></li>
            </ul>
            
            <ul class="social-icon">
            <div class="social-index">
                <li><a href="https://www.instagram.com/fulcrumcom"><i class="fa fa-instagram"></i></a></li>
                <li><a href="https://www.twitter.com/fulcrumcom"><i class="fa fa-twitter"></i></a></li>
                <li><a href="https://www.telegram.org/fulcrumcom"><i class="fa fa-telegram"></i></a></li>
            </div>
            </ul>
            
        </div>

        </header>

        <div class="clear"></div>

        <!--Content-->

        <div class="content" id="ajax-content">

            <div class="text-intro" id="site-type">

                <h1>Our goal is to unite</h1>
                <h1 class="typewrite"><span></span></h1>
                <p>This project is intended for the free distribution of textual information (books, poems, articles and so on).</p>

            </div>


        <!--Portfolio grid-->

        <ul class="portfolio-grid" id="works">

            <li v-for="work in works" class="grid-item" data-jkit="[show:delay=3000;speed=500;animation=fade]">
            <img :src="work.image">
                <a href="work.html">  
                <div class="grid-hover">
                    <h1>{{work.name}}</h1>
                    <p>{{work.author}}</p>
                </div>
                </a>  
            </li>

        </ul>

        </div>

        <!--Footer-->

        <footer id="footer-box">

        <div class="footer-margin">
        
        <div class="copyright" id="footer-left">© Copyright 2019 Fulcrum.com. All Rights Reserved.</div>
        
        </div>


        </footer>
    </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios)
export default {
    data(){
        return{
            works : []
        }
    },
    methods : {

    },
    mounted(){
        Vue.axios.get('http://localhost:3000/works').then(response => {
            console.log(response.data);
            this.works = response.data;
        })
    }
}
</script>

<style scoped>

</style>