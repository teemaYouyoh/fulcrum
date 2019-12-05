<template>
    <div>
  <Header />

    <div class="subHeader">
      <div class="container">
                  <p>Filter like you want:</p>
        <div class="navSubHeader">
          <!-- <div class="subHeaderCategory">Category</div>
          <div class="subHeaderKind">Kind</div>
          <div class="subHeaderAuthor">Author</div>
          <div class="subHeaderSort">Sort</div> -->

          <div class="categorySub">
            <select name="typeOfWork" v-model="typeOfWork"> 
              <option value="All" selected>All types</option>
              <option v-for="type in listTypesOfWorks" :value="type" v-bind:key='type'>{{type}}</option>
            </select>
          </div>
          <div class="kindSub">
            <select name="genreOfWork" v-model="genreOfWork">
              <option value="All" selected>All genres</option>
              <option v-for="genre in listGenreOfWorks" :value="genre" v-bind:key='genre'>{{genre}}</option>
            </select>
          </div>
        </div>
      </div>
    </div>

   <div class="content">

       <div class="container">
           <p class="mainContentP">Our goal is to unite
creative people</p>
           
            <p class="infoProjContent">
              <span>This project is intended for the free distribution of textual information (books, poems, articles and so on).</span>
              <i class="fas fa-search" @click="isActiveSubHeaderFunction()"></i>
            </p>
            <ul class="portfolio-grid" id="works">

                <li v-for="work in listOfWorks" class="grid-item" v-bind:key="work._id">
                   <div class="items_wrap">
                          <img :src="work.image">
                          <div class="grid-hover">
                            <h1><router-link :to="'/single-page/'+work._id"> {{work.name}}</router-link> </h1>
                            <p class="author"><router-link :to="'/profile/'+work.authorId"> {{work.author}}</router-link> </p>
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
Vue.use(VueAxios, axios)
// import VueTypedJs from 'vue-typed-js';
// import Typed from 'typed.js';

import Header from './Header.vue' 
import Footer from './Footer.vue' 

var $ = require('jquery');


export default {
  components : {
      Header,
      Footer
	},
    data(){
        return{
            works : [],
            typesOfWorks : {},
            typeOfWork : 'All',
            genreOfWork : 'All',
            isActiveSubHeader: 'false',
        }
    },
    mounted(){
        Vue.axios.get('http://localhost:3000/works').then(response => {
            console.log(response.data);
            this.works = response.data;
        });
        Vue.axios.get('http://localhost:3000/typesOfWorks').then(response => {
            console.log(response.data[0]);
            this.typesOfWorks = response.data[0];
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
        },
        isActiveSubHeaderFunction(){
          $(".subHeader>.container").animate({
              height: 'toggle'
          }, "slow");
          if(this.isActiveSubHeader == 'true'){
            $(".subHeader").animate({
              padding: '0'
            }, "slow");
            this.isActiveSubHeader = 'false'
          }
          else if(this.isActiveSubHeader == 'false'){
            $(".subHeader").animate({
              padding: '30px 0'
            }, "slow");
            this.isActiveSubHeader = 'true'
          }
        },
    },
    computed : {
      listOfWorks(){
        return this.works.filter(item => {
          if(this.typeOfWork == 'All') return true;
          else if(item.section.toLowerCase() == this.typeOfWork.toLowerCase() 
                  && (item.genre.toLowerCase() == this.genreOfWork.toLowerCase() 
                  || this.genreOfWork == "All")) return true;
        })
      },
      listTypesOfWorks(){
        let types = [];
        for(let key in this.typesOfWorks){
           if(key != '_id' && key != '__v'){
             types.push(key);
           }
        }
        return types;
      },
      listGenreOfWorks(){
        if(this.typeOfWork == 'All') this.genreOfWork = 'All'; 
        else {
          var genre = this.typesOfWorks[this.typeOfWork];
          // if(genre[0] !== undefined) this.genreOfWork = genre[0];
         }
        return genre;
      }
    },
    
   
}
</script>

<style scoped>

/* SUBHEADER */

.author a{
  text-decoration: none;
  font-size: 1rem;
  color: #000;
  font-weight: 500;
}

.subHeader{
  background: #2b2b2b;
    padding-left: 1%;
  padding-right: 1%;
}

.subHeader .container{
  display : none;
}

.grid-item{
  list-style-type: none;
}

.subHeader p{
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;

}

.categorySub select,
.kindSub select{
  background-color: transparent;
  color: #fff;
  max-width: 200px;
  /* min-height: 35px; */
  font-size: 1.6rem;
  text-align: center;
  border-radius: 25px;
  padding: 7%;
  text-transform: uppercase;
  font-weight: 600;
  margin-left: 2%;
  margin-right: 2%;
}

.categorySub option,
.kindSub option{
  height: 20px;
  font-size: 1rem;
  color: #000;
}

.categorySub{
  margin-right: 5%;
}

.navSubHeader{
  padding-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.subHeaderCategory,
.subHeaderKind,
.subHeaderAuthor,
.subHeaderSort{
  background-color: #f2f2f2;
  color: #2b2b2b;
  font-size: 1.7rem;
  border-radius: 5%;
  text-align: center;
  padding: 0.5% 2% 0.5% 2%;
  color:#2b2b2b;
  font-weight: 700;
  cursor: pointer;
  margin-right: 3.5%;
}

/* CONTENT */

.content{
    position: relative;
    padding-bottom: 3%;
    /* background: #2b2b2b; */
}

.mainContentP{
    padding-top: 5%;
    font-size: 43px;
    font-weight: 900;
    /* color: #fff; */
    text-transform: uppercase;
    line-height: 70px;
    width: 50%;
    padding-left: 2.5%;
}

/* .infoProjContent{
  font-size:13px;
  color:#797979;
  margin-top:20px;
  font-weight:400;
  line-height:22px;
  letter-spacing:1px;
  width:100%;
  padding-left: 2.5%;
} */
.infoProjContent{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size:13px;
  color:#797979;
  margin-top:20px;
  font-weight:400;
  line-height:22px;
  letter-spacing:1px;
  width:100%;
  padding-left: 2.5%;
}

.infoProjContent i{
  margin-left : auto;
  margin-right: 10px;
  font-size : 26px;
  cursor : pointer;
  transition : 0.5s;
}

.infoProjContent i:hover{
  color: black;
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
@media screen and (max-width: 600px){
  .mainContentP{
    width: 85%;
    font-size: 38px;
  }
  .categorySub select,
  .kindSub select{
    font-size: 1.2rem;
    padding: 2%;
  }
}

@media screen and (max-width: 400px) {
  .mainContentP{
     width: 100%;
     font-size: 33px;
  }
 
}

.items_wrap{
  max-width: 360px;  
  position: relative;
}
</style>