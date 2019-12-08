<template>
    <div>
      <Header/>
        <div class="profile" id="ajax-content">
              <div class="text-intro" id="site-type">
                <div class="topProfileBar">
                      <img class="profilePhoto" :src="user.avatar" @click="isActiveEditProfileFunction()">
                      <h2>{{user.about_u.name}}</h2>
                  </div>
                    <div class="editProfile" v-if="isCurrentUser == 'true'">
                        <div class="container">
                            <label for="file">You can change your profile photo</label>
                            <input type="file" id="file" ref="file" class="fileImg" v-on:change="handleFileUpload()" />
                            
                            
                            <label for="nameProf">Enter your Name</label>
                            <input type="text" placeholder="name" v-model="editUser.name" id="nameProf">
                            <label for="phoneProf">Enter your email</label>
                            <input type="text" placeholder="email" v-model="editUser.email" id="phoneProf">
                            <!-- <label for="birthdayProf">Enter your birthday</label>
                            <input type="text" placeholder="birthday" v-model="editUser.birthday" id="birthdayProf"> -->
                            <label for="passwordProf">Enter your new password</label>
                            <input type="password" placeholder="password" v-model="editUser.password" id="passwordProf">
                            <button v-on:click="submitFile()" id="submitBut">Submit</button>
                        </div>
                        
                    </div>
                    
                  
                  <div class="fullContentProfile">
                      <div class="leftContentProfile">
                          <p>My homepage</p>
                          <p>My creation</p>
                          <p>Sign out</p>
                      </div>
                      
                      <div class="rightContentProfile">
                          <div class="emailContentProfile">
                              <p class="stand">My mailbox: <span class="infoProf">{{user.email}}</span></p>
                          </div>
                          
                          <div class="telephoneContentProfile">
                              <p class="stand">My telephone number: <span class="infoProf">{{user.about_u.phone}}</span></p>
                          </div>
                          
                          <div class="birthdayContentProfile">
                              <p class="stand">Birthday: <span class="infoProf">{{user.about_u.birthday}}</span></p>
                          </div>
                      </div>
                        
                  </div>
              </div>
              <div class="listOfWorks">
                   <ul>
                       <li v-for="work in works" v-bind:key="work._id">
                           <router-link :to="'/single-page/'+work._id">{{work.name}}</router-link> 
                           <span @click="deleteWork(work._id)">удалить</span>    
                       </li>
                   </ul>
               </div>
        </div>
        <!-- <AddWork v-if="isCurrentUser == 'true'" /> -->
      
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
    import AddWork from './AddWork.vue'

    Vue.use(VueAxios, axios)

    var $ = require('jquery');


export default {
  components : {
    Header,
    Footer,
    AddWork
  },
  data(){
      return{
          editUser : {
              name : '',
              email : '',
              birthday : '',
              password : '',
              isActiveEditProfile : 'false'
          },
          user : {
              about_u : {
                  name : '',
                  email : '',
                  birthday : '',
              }
          },
          isCurrentUser : 'false',
          works : []
      }
  },
  mounted(){      
      Vue.axios.get('http://localhost:3000/users/'+this.$route.params.id).then(response => {
          console.log(response.data);
          this.user = response.data;
          this.editUser.name = response.data.about_u.name;
          this.editUser.email = response.data.email;
          this.editUser.password = response.data.password;
          this.editUser.birthday = response.data.birthday;
          

          let currentUser = this.$store.getters.getCurrentUser;
          if(currentUser !== null && currentUser._id == this.user._id)
            this.isCurrentUser = 'true';
      });
      Vue.axios.get('http://localhost:3000/works').then(response => {
          console.log(response.data);
          response.data.forEach(element => {
              if(element.authorId == this.user._id)
                this.works.push(element);
          });
          console.log(this.works);

      });
  },
  methods : {
    deleteWork(value){
        Vue.axios.delete('http://localhost:3000/works/'+value).then(response=>{
            console.log(response.data);
            Vue.axios.get('http://localhost:3000/works').then(response => {
                console.log(response.data);
                this.works = [];
                response.data.forEach(element => {
                    if(element.authorId == this.user._id)
                        this.works.push(element);
                });
                console.log(this.works);

            });
        })
    },
    async submitFile() {
         let formData = new FormData();
         formData.append('file', this.file);
         formData.append('student_id', this.user._id);
         await Vue.axios.post('http://localhost:3000/uploadphoto', formData, { headers: {
                 'Content-Type': 'multipart/form-data'
                 }
             }).then(function () {
                  console.log('SUCCESS!!');
             })
             .catch(function () {
             console.log('FAILURE!!');
             });
            this.user.about_u.name = this.editUser.name;
            this.user.about_u.email = this.editUser.email;
            this.user.about_u.birthday = this.editUser.birthday;
            this.user.password = this.editUser.password;
            Vue.axios.put('http://localhost:3000/users/'+this.user._id, JSON.parse(JSON.stringify(this.user))).then(response=>{
                console.log(response.data);
            });
         },
    handleFileUpload() {
        this.file = this.$refs.file.files[0];
        this.user.avatar = '../uploads/image/' + this.user._id + '.jpg';

    },
    isActiveEditProfileFunction(){
        $(".editProfile").animate({
            height: 'toggle'
        }, "slow");
    },


  }
}
</script>

<style scoped>

/*
******************************
PROFILE
******************************
*/

.editProfile{
    display: none;
}

.editProfile .container{
    padding: 1.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* float: right; */
}

.editProfile input{
    margin-bottom: 1.15%;
    padding: 0.5%;
    border: 0.5px solid #050505;
    border-radius: 15px;
    text-align: center;
}
#file{
    padding: 0.75%;
    text-align: center;
    cursor: pointer;
    background-color: #fff;
    color: #000;
    border: 1px solid transparent;
}

.editProfile label{
    padding-bottom: 1%;
}

#submitBut{
    margin-bottom: 1.5%;
    padding: 0.75%;
    text-align: center;
    cursor: pointer;
    background-color: #fff;
    color: #000;
    transition: 0.75s;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 25px;
    border: 1px solid #000;
    width: 15%;
}

.fileImg input{
    padding: 0.25%;
    text-align: center;
    cursor: pointer;
    background-color: #fff;
    color: #000;
    font-size: 0.85rem;
    border-radius: 15px;
    border: 0.5px solid #000;

}

#submitBut:hover{
    transition: 0.75s;
    color: #fff;
    background-color: #000;
    border: 1px solid #fff;

}

.topProfileBar{
    background: url(/src/img/profile.jpeg) center no-repeat;
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
    cursor: pointer;
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
    font-weight: 700;
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
    width: 100%;
}

.stand{
    font-size: 1.2rem;
     color: rgba(10,10,10,0.8);
     font-weight: 600;
     width: 100%;
}
.emailContentProfile span,
.telephoneContentProfile span,
.birthdayContentProfile span{
    transform: translateY(2px);
    font-family: 'Arial', sans-serif;
    color: #6c8484;
    font-size: 1.1rem;
    padding-left: 1%;
}

@media screen and (max-width: 800px){
    .fullContentProfile{
        display: flex;
        flex-direction: column;
    }
    .leftContentProfile{
        border: none;
        width: 100%;
        /* margin: 0 auto; */
    }
    .rightContentProfile{
        width: 100%;
    }
    .editProfile{
        width: 75%;
    }
    .topProfileBar h2{
        font-size: 2.5rem;
    }
    #submitBut{
        width: 25%;
    }
}

@media screen and (max-width: 650px){
    .profilePhoto{
        margin: 0 auto;
        display: flex;
    }
    .topProfileBar{
        display: block;
        padding-top: 6%;
    }
    .topProfileBar h2{
        display: flex;
        justify-content: center;
        margin-top: 4%;
        margin-bottom: 1.5%;
        font-size: 2rem;
    }
    .stand{
        font-size: 1rem;
    }
    .emailContentProfile span,
    .telephoneContentProfile span,
    .birthdayContentProfile span{
        font-size: 1rem;
    }
    .editProfile{
        width: 100%;
    }
    #submitBut{
        width: 50%;
    }
}

@media screen and (max-width: 400px){
    .topProfileBar h2{
        font-size: 1.5rem;
    }
    #submitBut{
        width: 75%;
    }
}
</style>