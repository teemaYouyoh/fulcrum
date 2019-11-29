<template>
    <div>
  <Header/>
   
   <div class="content">
       <div class="container">
           <p class="mainContentP">Наша мета - об’єднати креативних людей</p>
           
           <p class="infoProjContent">Цей проект призначений для вільного розповсюдження текстової інформації (книги, вірші, статті тощо).</p>
           
           
            <ul class="portfolio-grid" id="works">

                <li v-for="work in works" class="grid-item" v-bind:key="work._id">
                   <div class="items_wrap">
                          <img :src="work.image">
                          <div class="grid-hover">
                            <h1><router-link :to="'/single-page/'+work._id"> {{work.name}}</router-link> </h1>
                            <p><router-link :to="'/profile/'+work.authorId"> {{work.author}}</router-link> </p>
                          </div>
                   </div>
                </li>

            </ul>
       </div>
   </div>
    <Footer/>
    </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
// import VueTypedJs from 'vue-typed-js';
// import Typed from 'typed.js';

import Header from './Header.vue' 
import Footer from './Footer.vue' 

Vue.use(VueAxios, axios)

export default {
  props : ['typeOfWork'],
  components : {
      Header,
      Footer
	},
    data(){
        return{
            works : []
        }
    },
    mounted(){
        Vue.axios.get('http://localhost:3000/works').then(response => {
            console.log(response.data);
            this.works = response.data;
            alert(this.$props.typeOfWork);
        });
        
    },
    methods : {
        diff: function(arr1, arr2) {
          return arr1.filter(value => -1 !== arr2.indexOf(value));
        },
        sortWorkByDate(value){
          switch(value){
            case 'up' : {
               this.works.sort(function (a, b) {
                  if (a.date <= b.date) return 1;
                  else return -1;
                });
                break;
            };

            case 'down' : {
               this.works.sort(function (a, b) {
                  if (a.date >= b.date) return 1;
                  else return -1;
                });
                break;
            };

          }
        }
    },
   
}

</script>

<style scoped>

/* CONTENT */

.content{
    position: relative;
    padding-bottom: 3%;
    background: #2b2b2b;
}

.mainContentP{
    padding-top: 5%;
    font-size: 43px;
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
    line-height: 70px;
    width: 40%;
    padding-left: 2.5%;
}

.infoProjContent{
  font-size:13px;
  color:#797979;
  margin-top:20px;
  font-weight:400;
  line-height:22px;
  letter-spacing:1px;
  width:100%;
  padding-left: 2.5%;
}

/*
.mainContentP{
  font-size:43px;
  text-transform:uppercase;
  color:#000000;
  font-weight:900;
  line-height:70px;
}
*/



/* 
************************
GRID CONTENT 
************************
*/

.portfolio-grid{
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-around; 
  overflow:hidden;
}

li.grid-item{
  width: 33%;
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

.grid-hover h1 a{
  color: #000;
  text-decoration: none;
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

@media screen and (max-width:1090px){
    .portfolio-grid{
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      justify-content: space-around;
/*      flex-direction: column;*/

    }
    
    li.grid-item{
      width: 49%;  
    }
    
}

@media screen and (max-width:800px) {
  .show-menu-btn,.hide-menu-btn{
    display: block;
  }
  .menu{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #333;
    right: -100%;
    top: 0;
    text-align: center;
    padding: 80px 0;
    line-height: normal;
    transition: 0.7s;
      z-index: 100;
  }
  .menu a{
    display: block;
    padding: 20px;
  }
  .hide-menu-btn{
    position: absolute;
    top: 40px;
    right: 40px;
  }
  #chk:checked ~ .menu{
    right: 0;
  }
    .portfolio-grid{
      display: block;
      margin: 0 auto;
/*      flex-direction: column;*/

    }
    li.grid-item{
      width: 100%;
      display: flex;
      justify-content: center;  
    }

    .grid-hover{
      display: flex;
      justify-content: center;
    }
    
}
.items_wrap{
  max-width: 360px;  
  position: relative;
}
</style>