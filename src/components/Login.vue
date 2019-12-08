<template>
    <div>
        <Header/>
        <div class="clear"></div>

        <div class="login" id="ajax-content" >

            <div class="text-intro" id="site-type">

                <div class="login-box" v-if="isSignIn == 'true'">
                    <h1>Login</h1>
                    <div class="textbox">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="E-mail" v-model='userEmail'>
                    </div>

                    <div class="textbox">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" v-model='userPassword' name='user-password'>
            
                        <i class="fas fa-eye" @mousedown="showPassword()" @mouseup="hidePassword()"></i>
                    </div>

                    <input type="button" class="btn" value="Sign in" @click="signIn()">
                    <p class="signUpLog">Don't have account? <span @click="isSignIn = 'false'"> Sign up </span></p>
                </div>
                
                
                <div class="reg-box" v-else-if="isSignIn == 'false'">
                    <h1>Sign Up</h1>
                    <div class="textbox">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username" v-model="userName">
                    </div>
                    
                    <div class="textbox">
                        <i class="fas fa-envelope"></i>
                        <input type="text" placeholder="E-mail" v-model="userEmail">
                    </div>
                        
                    <div class="textbox">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" v-model="userPassword" name='user-password'>
                        <i class="fas fa-eye" @mousedown="showPassword()" @mouseup="hidePassword()"></i>
                    </div>

                    <div class="textbox" id="textAreaLogin">
                        <input type="textarea" placeholder="Enter information about yourself">
                    </div>

                    <input type="button" class="btn" value="Sign up" @click="signUp()">
                    <p class="signUpLog">Already have account? <span @click='isSignIn = "true"'> Sign in </span></p>
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
            userName : '',
            userPassword : '',
            userEmail : '',
            isSignIn : 'true'
        }
    },
    mounted(){
        Vue.axios.get("http://localhost:3000/users").then(response=>{
            console.log(response.data);
            this.users = response.data;
        });
    },
    methods : {
        signIn(){
            Vue.axios.get("http://localhost:3000/users").then(response=>{
                console.log(response.data);
                response.data.forEach(element => {
                    if(element.email == this.userEmail && element.password == this.userPassword){
                        this.$store.commit('setCurrentUser', element);
                        this.$router.push('/profile/' + element._id);
                    }
                });
            });
            
        },
        signUp(){
            let isUser = false;
            let user = {
                about_u : {
                    name : this.userName,
                    phone : '',
                    birthday : ''
                },
                email : this.userEmail,
                password : this.userPassword,
                avatar : '/src/img/face.png',
                regist_date : '123'
            };
            this.users.forEach(element => {
                if(element.email == user.email)                
                    isUser = true;
            });
            if(!isUser){
                Vue.axios.post("http://localhost:3000/users", JSON.parse(JSON.stringify(user))).then(response=>{
                    console.log(response.data);
                    this.signIn();        
                });            
            }
            else {
                alert('This email is already in use');
            }

        },
        showPassword(){
            document.getElementsByName('user-password')[0].type = 'text';
            document.getElementsByName('user-password')[1].type = 'text';
            },
        hidePassword(){
            document.getElementsByName('user-password')[0].type = 'password';
            document.getElementsByName('user-password')[1].type = 'password';
        },
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
     /* background: url(/src/img/bg2.jpeg)center no-repeat;
    -webkit-background-size: cover;
    background-size: cover; */
background-color: #e2e2e2;
padding-top: 2.5%;
padding-bottom: 2.5%;
}

.signUpLog{
    text-align: center;
    font-size: 2.35rem;
    color: rgb(138, 138, 138);
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
  color: rgb(138, 138, 138);
}
.login-box h1,
.reg-box h1{
  text-align: center;
  font-size: 30px;
  border-bottom: 6px solid rgb(138, 138, 138);
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
  border-bottom: 1px solid rgb(138, 138, 138);
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
  color: rgb(138, 138, 138);
  font-size: 18px;
  width: 80%;
  margin: 0 10px;
}

.btn{
  width: 100%;
  background: none;
  border: 2px solid rgb(138, 138, 138);
  color: rgb(138, 138, 138);
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