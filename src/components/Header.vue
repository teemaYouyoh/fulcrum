<template>
    <div>
        <div class="header">
      <div class="container">
        <router-link :to="'/'"><h2 class="logo">FULCRUM</h2></router-link>
        <input type="checkbox" id="chk">
        <label for="chk" class="show-menu-btn">
          <i class="fas fa-align-justify"></i>
        </label>

        <ul class="menu">
          <div class="linksHeader">
              <a href="#"><i class="fas fa-search" @click="isActiveSubHeaderFunction()"></i></a>
              <router-link :to="'/login'"><i class="fas fa-user"></i></router-link>
              <a href="#"><i class="fas fa-plus"></i></a>
              <router-link :to="'/'"><i class="fas fa-home"></i></router-link>
          </div>

          <div class="socialHeader">
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
          </div>

          <!-- <a href="#"><i class="fab fa-telegram"></i></a> -->

          <label for="chk" class="hide-menu-btn">
            <i class="fas fa-times"></i>
          </label>
        </ul>
        </div>
      </div>
      
    <div class="subHeader" v-if="isActiveSubHeader=='true'">
      <div class="container">
                  <p>Filter like you want:</p>
        <div class="navSubHeader">
          <!-- <div class="subHeaderCategory">Category</div>
          <div class="subHeaderKind">Kind</div>
          <div class="subHeaderAuthor">Author</div>
          <div class="subHeaderSort">Sort</div> -->

          <div class="categorySub">
            <select name="typeOfWork" v-model="typeOfWork"> 
              <option v-for="type in listTypesOfWorks" :value="type" v-bind:key='type'>{{type}}</option>
            </select>
          </div>
          <div class="kindSub">
            <select name="genreOfWork" v-model="genreOfWork">
              <option v-for="genre in listGenreOfWorks" :value="genre" v-bind:key='genre'>{{genre}}</option>
            </select>
          </div>

        </div>
      </div>
    </div>
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
      isActiveSubHeader: 'true',
      typesOfWorks : {},
      typeOfWork : '',
      genreOfWork : '',
    }
  },
  mounted(){
    Vue.axios.get('http://localhost:3000/typesOfWorks').then(response => {
            console.log(response.data[0]);
            this.typesOfWorks = response.data[0];
        });
  },
  methods:{
    isActiveSubHeaderFunction(){
      if(this.isActiveSubHeader=='true')
      this.isActiveSubHeader = 'false';
      else if(this.isActiveSubHeader=='false')
      this.isActiveSubHeader = 'true';
      return this.isActiveSubHeader;
    }
  },
  computed : {
    
     listTypesOfWorks(){
       let types = [];
       for(let key in this.typesOfWorks){
          if(key != '_id' && key != '__v'){
            types.push(key);
          }
       }
       if(types !== undefined) this.typeOfWork = types[0];
       return types;
     },
     listGenreOfWorks(){
       let genre = this.typesOfWorks[this.typeOfWork];
       if(genre !== undefined) this.genreOfWork = genre[0];
       return genre;
     }
   }
}
</script>

<style scoped>

/* HEADER */

.header{
  height: 100px;
  background: #2b2b2b;
  padding: 0 20px;
  color: #fff;
}

.logo{
  line-height: 100px;
  float: left;
  text-transform: uppercase;
  font-size: 36px;
  cursor: pointer;
  color: #fff;
}

.linksHeader{
  display: flex;
  justify-content: flex-start;
}

.socialHeader{
  display: flex;
  justify-content: center;
}

.menu{
  display: flex;
  justify-content: space-around;
  line-height: 100px;
}
.menu a{
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 30%;
  transition: 0.4s;
  font-size: 28px;
  font-weight: 600;
}
.menu a i{
    font-size: 1.65rem;
    font-weight: 500;
}
.show-menu-btn,.hide-menu-btn{
  transition: 0.4s;
  font-size: 30px;
  cursor: pointer;
  display: none;
}
.show-menu-btn{
  float: right;
}
.show-menu-btn i{
  line-height: 100px;
}
.menu a:hover,
.show-menu-btn:hover,
.hide-menu-btn:hover{
  color: #3498db;
}

#chk{
  position: absolute;
  visibility: hidden;
  z-index: -1111;
}


/* SUBHEADER */

.subHeader{
  background: #2b2b2b;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
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
  width: 200px;
  /* min-height: 35px; */
  font-size: 1.6rem;
  text-align: center;
  border-radius: 25px;
  padding: 7%;
  text-transform: uppercase;
  font-weight: 600;
}

.categorySub option,
.kindSub option{
  height: 20px;
  font-size: 1rem;
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

@media screen and (max-width:800px) {
  .show-menu-btn,.hide-menu-btn{
    display: block;
   }
   .menu{
     display: flex;
     justify-content: space-between;
   }
    .linksHeader{
           margin-top: 5%;
    }

   .socialHeader{
     margin-right: 5%;
          margin-top: 5%;
   }
   .menu a{
     padding: 0 21%;
   } 
}
</style>