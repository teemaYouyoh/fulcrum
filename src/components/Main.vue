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

<style>
    @import url(http://fonts.googleapis.com/css?family=Raleway:400,300,500,600,700,800,900,100,200);

body{
  font-family: 'Raleway', sans-serif;
  font-size:14px;
  font-weight: 400;
  overflow-y:scroll;
  -webkit-font-smoothing: antialiased;
}

::selection {
		background: #000;
		color: #fff;
		text-shadow: none;
	}
	
	::-moz-selection {
		background: #000;
		color: #fff;
		text-shadow: none;
	}

p{
  font-family: 'Raleway', sans-serif;
  font-size:14px;
  font-weight: 400;
}

a{
  text-decoration:none;
  -webkit-transition: all 0.2s ease-in;
	-moz-transition: all 0.2s ease-in;
	-ms-transition: all 0.2s ease-in;
	-o-transition: all 0.2s ease-in;
	transition: all 0.2s ease-in; 
	border-bottom:1px solid #dedede;
}

a:focus {
  outline:none;
}

strong{
  font-weight:700;

}

/*
**************************
PRELOADER
**************************
*/
/* 
.preloader{
  position:fixed;
  top:0;
  width:100%;
  height:100%;
  background:white;
  z-index:999;
}
 
.preloader .item{
  position:absolute;
  width:50px;
  height:50px;
  left:50%;
  top:50%;
  margin-left:-25px;
  margin-top:-25px;
} 

.spinner {
  width: 40px;
  height: 40px;
  margin: 0px auto;
  background-color: #333;
  border-radius: 100%;  
  -webkit-animation: scaleout 1.0s infinite ease-in-out;
  animation: scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes scaleout {
  0% { -webkit-transform: scale(0.0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes scaleout {
  0% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
} */





/*
**************************
NAVIGATION OPACITY
**************************
*/



.opacity-nav{
  position:fixed;
  display:none;
  width:100%;
  height:100%;
  top:0;
  z-index:9999;
  background:rgba(0,0,0,0.95);
}

ul.menu-fullscreen{
  width: 100%;
  top: 50%;
  position: absolute;
  height: 280px;
  margin-top: -140px;
}

ul.menu-fullscreen li{
  font-size:35px;
  text-align:center;
  line-height:70px;
  font-weight:500;
}

ul.menu-fullscreen li > a{
  color:#999999;
  border:0;
}

ul.menu-fullscreen li > a:hover{
  color:#ffffff;
}


#full{
  width:1140px;
  position: relative;
  top:0;
  margin:0 auto;
  z-index: 9997;
}


#fullscreen{
  display:none;
  position:absolute;
  top:0;
  width:100%;
  margin:0 auto;
  height:80px;
  z-index: 9998;
}

/*
**************************
HEADER
**************************
*/

header.boxed{
  position:fixed;
  width:100%;
  margin:0 auto;
  height:80px;
  z-index:9999;
  display:none;
  background:none;
  top:0;
    -webkit-transition: background 0.2s ease-in;
	-moz-transition: background 0.2s ease-in;
	-ms-transition: background 0.2s ease-in;
	-o-transition: background 0.2s ease-in;
	transition: background 0.2s ease-in; 
}

header.boxed .header-margin{
  width:1140px;
  margin:0 auto;
}

header.boxed .header-margin-mini{
  width:90%;
  margin:0 auto;
}


ul.social-icon{
  float:right;
}

ul.social-icon a{
  float:right;
  font-size:15px;
  border-bottom:0;
  color:black;
  padding-right:0px !important;
}

ul.social-icon a:hover{
  color:#c3c3c3;
}

.menu-index{
  position: fixed;
  right: 5%;
  top: 30px;
  z-index: 99999;
  padding:20px;
  background:black;
  cursor:pointer;
}


.menu-index i{
  float:right;
  font-size:18px;
  color:white;
  padding-right:0px !important;
}

.menu-index i:hover{
  color:#c3c3c3;
}


ul.menu-icon{
  float:right;
}

ul.menu-icon a{
  float:right;
  font-size:19px;
  color:white;
  padding-right:0px !important;
}

ul.menu-icon i{
  padding:20px;
  background:black;
}

ul.menu-icon a:hover{
  color:#c3c3c3;
}

header a{
  color:#000000;
}

ul.header-nav{
  width:60%;
  float:left;
}

header .logo > a{
  font-size:23px;
  font-weight:800;
  float:left;
  line-height:80px;
  padding-right:40px;
  border-bottom: 1px solid #f1f1f1;
}

header .logo > a:hover{
  color:#c3c3c3;
}

header li{
  text-transform:uppercase;
  list-style-type: none; margin: 0 auto; float: left;
}

header li > a{
  font-size:13px;
  color:#c3c3c3;
  padding-right:25px;
  padding-left:25px;
  font-weight:800;
  line-height:80px;
  display:inline-block;  
  border-bottom:0;
}

header li > a:hover{
  color:#000000;
}

header li > a #active{
  color:#000000;
}

header li ul{
  overflow: hidden; display: none; background: #f9f9f9; z-index:20;
}

header li ul li a{
  line-height:50px;
  padding-left:30px; 
  width:260px;
}

header li:hover ul{
  position: absolute; padding: 0; display: block; width: 260px;
}



/*
**************************
CONTENT
**************************
*/

.hero-image{
  position:relative; 
  width:100%; 
  top:0; 
  height:400px; 
  /* background: url('../img/full/full.jpg') center center; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;  
  
}

.one-column{
  width:40%;
  position:relative;
  float:left;
}

.two-column{
  width:60%;
  position:relative;
  float:left;
}

.one-column p{
  width:70% !important;
}

.two-column p{
  width:100% !important;
}

.clear{
  clear:both;
}

.content{
  position:relative;
  width:1140px;
  margin:50px auto;
}


.content .text-intro{
  width: 1140px;
  margin-top: 150px;
  margin: 150px auto 0;
}

.content .text-intro h1{
  font-size:43px;
  width:40%;
  text-transform:uppercase;
  color:#000000;
  font-weight:900;
  line-height:70px;
}

.content .text-intro p{
  font-size:13px;
  color:#797979;
  margin-top:20px;
  font-weight:400;
  line-height:22px;
  letter-spacing:1px;
  width:100%;
}

.content .text-intro .crop-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.content .text-intro .crop-container img {
    margin-top: -200px;
    margin-bottom: -200px;
}

.content .text-intro .text p{

}

        .typed-cursor{
            opacity: 1;
            font-weight: 900;
            -webkit-animation: blink 0.7s infinite;
            -moz-animation: blink 0.7s infinite;
            -ms-animation: blink 0.7s infinite;
            -o-animation: blink 0.7s infinite;
            animation: blink 0.7s infinite;
        }
        @-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-webkit-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-moz-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-ms-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-o-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }

/*
**************************
HOME SIDEBAR
**************************
*/

.home-sidebar{
  top:0;
  position:absolute;
  width:33.3333%;
  right:0;
  height:100%;
  background:#f4f4f4;
  z-index:9;
  overflow:hidden;
  background-size:100%;
}

.parallax{
  position:absolute;
}

.parallax-option{
  position:absolute; width:100%; height:100%;
}

/*
**************************
PORTFOLIO GRID
**************************
*/

.prev-next{
  width:100%;
  max-width:1170px;
  margin:0 auto;
  padding-top:100px;
}

.prev-next a{
  color:black;
  font-weight:500;
  padding-bottom: 15px;
}

.prev-next a:hover{
  border-bottom:1px solid black;
}

.prev-button{
  width:50%;
  position:relative;
  float:left;
  text-align:left;
}

.next-button{
  width:50%;
  position:relative;
  float:left;
  text-align:right;
}


#ajax-content{width:100%;}

.portfolio-grid{
  width:1170px;
  position:relative;
  margin: 30px auto;
  overflow:hidden;
}

#portfolio-sidebar{
  width: 780px !important;
  padding-right: 390px;

}

li.grid-item{
  width:360px;
  position:relative;
  float:left;
  padding:15px;
}

.grid-hover{
  position: absolute;
  width:360px;
  height: 100%;
  top:0;
  background: white;
  z-index: 2;
  opacity: 0;
  -webkit-transition: all 0.2s ease-in;
	-moz-transition: all 0.2s ease-in;
	-ms-transition: all 0.2s ease-in;
	-o-transition: all 0.2s ease-in;
	transition: all 0.2s ease-in; 
}

.grid-hover:hover{
  opacity: 0.9;
}

.grid-hover h1{
  font-size:23px;
  bottom:80px;
  left:40px;
  position:absolute;
  text-transform:uppercase;
  color:#000000;
  letter-spacing:1px;
  font-weight:900;
  line-height:50px;
}

.grid-hover p{
  font-size:13px;
  bottom:40px;
  left:40px;
  position:absolute;
  color:#686868;
  letter-spacing:1px;
  font-weight:400;
  line-height:50px;
}

li.grid-item img{
  width:360px;
}

/*
**************************
FOOTER
**************************
*/

#footer-box{height:150px; margin-top:75px;}

footer{
  background: #f1f1f1;
  width:100%;
  margin-top:150px;
  height:300px;
  overflow:hidden;
  position:relative;
  z-index:10;
}

.footer-margin{
  width:1140px;
  margin: 30px auto;
  line-height: 100px;
}

#footer-left{text-align:left;}

.footer-margin .copyright{
  color: #686868;
  letter-spacing: 1px;
  font-size: 12px;
  width: 100%;
  text-align:center;
  float: left;
}

.footer-margin .social-footer{
  color: #686868;
  letter-spacing: 1px;
  font-size: 13px;
  width: 100%;
  text-align:center;
  float: left;
}

.footer-margin .social-footer a{
  font-size:15px;
  color:black;
  padding: 20px;
}

.footer-margin .social-footer a:hover{
  color:#c3c3c3;
}


/*
**************************
CONTACT
**************************
*/

.contact-one, .contact-two{
  width:30%;
  padding-right:3%;
  position:relative;
  float:left;
}

.contact-three{
  width:33%;
  position:relative;
  float:left;
}

.contact-one p, .contact-two p, .contact-three p{
  width:100% !important;
}

input{

  width:100%;
  height:40px;
  background:#f8f7f7;
  border:0;
  color:#000000;
  font-weight:500;
  line-height:40px;
  font-family: 'Raleway', sans-serif;
  margin-bottom:10px;
  font-size:13px;
  padding-left:15px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
}

input.button-submit{

  width:220px;
  height:40px;
  background:#f8f7f7;
  font-weight:500;
  border:0;
  font-family: 'Raleway', sans-serif;
  color:#000000;
  float:right;
  font-weight:900;
  line-height:40px;
  font-size:13px;
}

input:focus{
  background:#f4f4f4; 
}

textarea{

  width:100%;
  height:40px;
  border:0;
  line-height:40px;
  background:#f8f7f7;
  color:#000000;
  font-size:13px;
  font-family: 'Raleway', sans-serif;
  font-weight:500;
  margin-bottom:10px;
  padding:0 0 0 15px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
    -webkit-transition: all 0.2s ease-in;
	-moz-transition: all 0.2s ease-in;
	-ms-transition: all 0.2s ease-in;
	-o-transition: all 0.2s ease-in;
	transition: all 0.2s ease-in; 
}

textarea:focus{background:#f4f4f4; height:250px;}


/* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
	.header.boxed .header-margin{
		float: none !important;
	}
}

</style>