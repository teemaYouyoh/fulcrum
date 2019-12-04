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
              <router-link :to="'/'"><i class="fas fa-home"></i></router-link>
              <router-link :to="'/login'" v-if="currentUser === null"><i class="fas fa-plus"></i></router-link>
              <router-link :to="'/add-work'" v-else-if="currentUser !== null"><i class="fas fa-plus"></i></router-link>
              <router-link :to="'/login'" v-if="currentUser === null"><i class="fas fa-user"></i></router-link>
              <router-link :to="'/logout'" v-else-if="currentUser !== null"><i class="fas fa-sign-out"></i></router-link>
              <router-link class="currentUserName" :to="'/profile/' + currentUser._id" v-if="currentUser !== null">{{currentUser.about_u.name}}</router-link>
          </div>

          <div class="socialHeader">
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-telegram"></i></a>
          </div>

          <!-- <a href="#"><i class="fab fa-telegram"></i></a> -->

          <label for="chk" class="hide-menu-btn">
            <i class="fas fa-times"></i>
          </label>
        </ul>
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
      currentUser : null,
    }
  },
  mounted(){
    this.currentUser = this.$store.getters.getCurrentUser;
  },
  methods:{
   
  },
  computed : {
    
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
  padding: 0 30px;
  transition: 0.4s color;
  font-size: 28px;
  font-weight: 600;
}
.menu a i{
    font-size: 1.65rem;
    font-weight: 500;
}
.menu .currentUserName{
  font-size : 16px;
  padding : 0;
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
     padding: 0 21px;
   } 
}
</style>