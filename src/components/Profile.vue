<template>
    <div>
      <Header/>
        <div class="profile" id="ajax-content">
              <div class="text-intro" id="site-type">
                <div class="topProfileBar">
                      <div class="profilePhoto"></div>
                      <h2>Mionder</h2>
                  </div>
                  
                  <div class="fullContentProfile">
                      <div class="leftContentProfile">
                          <p>Моя сторінка</p>
                          <p>Моя творчість</p>
                          <p>Вихід</p>
                      </div>
                      
                      <div class="rightContentProfile">
                          <div class="emailContentProfile">
                              <p class="stand">Моя поштова скринька: <span>example@gmail.com</span></p>
                          </div>
                          
                          <div class="telephoneContentProfile">
                              <p class="stand">Мій номер телефону: <span>+38 066 66 66 666</span></p>
                          </div>
                          
                          <div class="birthdayContentProfile">
                              <p class="stand">День народження: <span>01.01.2000</span></p>
                          </div>
                      </div>
                  </div>
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

    import Header from './Header.vue' 
    import Footer from './Footer.vue' 

    Vue.use(VueAxios, axios)

export default {
  components : {
    Header,
    Footer
  },
  data(){
      return{
          users : []
      }
  },
  mounted(){
      Vue.axios.get('http://localhost:3000/users').then(response => {
          console.log(response.data);
          this.users = response.data;
      })
  }
}
</script>

<style scoped>

/*
******************************
PROFILE
******************************
*/

.topProfileBar{
    background: url(/src/img/profile.jpeg)center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    display: flex;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
}

.topProfileBar h2{
    color: #fff;
    font-size: 3rem;
    display: flex;
    font-weight: 700;
    align-items: center;
/*    padding-left: 2.5%;*/
    margin-left: 1.5%;
    text-shadow: 6px 6px 0px rgba(10,10,10,0.8);
    opacity: 0.85;
    padding: 0.5%;
    max-height: 40px;
/*    -webkit-text-stroke: 1px black;*/
}

.tinyProfilePhoto{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: url(/src/img/face.png)center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    display: flex;
    align-items: center;
    margin-top: 75%;
}

.tinyTopProfile{
    display: flex;
    justify-content: center;
}

#profileTopLi{
    padding-left: 5px;
}

.profilePhoto{
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background: url(/src/img/face.png) center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    margin-left: 5%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.fullContentProfile{
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;
    border: 1px solid #dfe6e9;
}

.leftContentProfile{
    width: 30%;
    border-right: 1px solid #dfe6e9;
    padding-top: 2.5%;
    padding-left: 5%;
    padding-bottom: 1%;
}

.leftContentProfile p{
    padding-bottom: 2.5%;
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 600;
    cursor: pointer;
    color: #636e72;
    text-transform: uppercase;
}

.rightContentProfile{
    width: 70%;
    padding-top: 3%;
    padding-left: 5%;
}

.emailContentProfile,
.telephoneContentProfile,
.birthdayContentProfile{
    display: flex;
    padding-bottom: 2%;
}

.stand{
    font-size: 1rem;
     color: rgba(10,10,10,0.8);
}
.emailContentProfile span,
.telephoneContentProfile span,
.birthdayContentProfile span{
    transform: translateY(2px);
    font-family: 'Arial', sans-serif;
    color: #6c8484;
}
</style>