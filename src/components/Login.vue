<template>
    <div>
        <Header/>
        <div class="clear"></div>

        <div class="login" id="ajax-content">

            <div class="text-intro" id="site-type">

                <div class="login-box">
                    <h1>Login</h1>
                    <div class="textbox">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username" v-model='userLogin'>
                    </div>

                    <div class="textbox">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" v-model='userPassword'>
                        <i class="fas fa-eye"></i>
                    </div>

                    <input type="button" class="btn" value="Sign in" @click="signIn()">
                    <p class="signUpLog">Don't have account? <span> Sign up </span></p>
                </div>
                
                
                <div class="reg-box">
                    <h1>Sign Up</h1>
                    <div class="textbox">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username">
                    </div>
                    
                    <div class="textbox">
                        <i class="fas fa-envelope"></i>
                        <input type="text" placeholder="E-mail">
                    </div>
                        
                    <div class="textbox">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password">
                        <i class="fas fa-eye"></i>
                    </div>

                    <div class="textbox" id="textAreaLogin">
                        <input type="textarea" placeholder="Enter information about yourself">
                    </div>

                    <input type="button" class="btn" value="Sign up">
                    <p class="signUpLog">Already have account? <span> Sign in </span></p>
                </div>
            </div>
        <!--Portfolio grid-->

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

import Header from './Header.vue' 
import Footer from './Footer.vue' 
export default {
    components : {
        Header,
        Footer
    },
    data(){
        return{
            users : [],
            userLogin : '',
            userPassword : ''
        }
    },
    mounted(){
        Vue.axios("http://localhost:3000/users").then(response=>{
            console.log(response.data);
            this.users = response.data;
        })

    },
    methods : {
        signIn(){

            console.log(this.$router.app._route.fullPath);

            this.users.forEach(element => {
                if(element.email == this.userLogin && element.password == this.userPassword){
                    this.$store.commit('setCurrentUser', element);
                    this.$router.push('/profile/' + element._id);
                }
            });
        }
    }
    
}
</script>

<style scoped>

/* 
*******************
LOGIN MENU
*******************
*/
.login{
     background: url(/src/img/bg2.jpeg)center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
}

.signUpLog{
    text-align: center;
    font-size: 2.35rem;
    color: #fff;
    font-weight: 600;
    padding-bottom: 15%;
}

.signUpLog span{
    color: brown;
    cursor: pointer;
}


.login-box,
.reg-box{
  width: 280px;
    margin: 0 auto;
  color: white;
}
.login-box h1,
.reg-box h1{
  text-align: center;
  font-size: 30px;
  border-bottom: 6px solid #f5f5f5;
  margin-bottom: 50px;
  padding: 13px 0;
    padding-top: 20%;
    font-weight: 600;
    text-transform: uppercase;
}
.textbox{
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  display: flex;
    justify-content: center;
  border-bottom: 1px solid #f5f5f5;
}
.textbox i{
    min-width: 37px;
    padding-top: 0%;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    padding-left: 2%;
}
.fas.fa-lock{
    font-size: 28px;
}
.textbox input{
  border: none;
  outline: none;
  background: none;
  color: white;
  font-size: 18px;
  width: 80%;
  margin: 0 10px;
}

.btn{
  width: 100%;
  background: none;
  border: 2px solid #f5f5f5;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 5%;
  padding: 10px;
}

.content .text-intro p, .login .text-intro p {
    font-size: 13px;
    color: #797979;
    margin-top: 20px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 1px;
    width: 100%;
}

#textAreaLogin{
    min-height: 100px;
    border-bottom: 1px solid #797979;
}
</style>