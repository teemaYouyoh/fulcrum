<template>
    <form class="fullStackBlock" v-on:submit.prevent="noop">
        <Header />
        <div class="fullAddWorkBlock">
            <div class="container">
                <div class="fullSide">
              <div class="leftSideAdd">
                    <label for="nameOfWork">Enter the name of the work</label>
                    <input type="text" v-model="work.name" id="nameOfWork">
                    <label for="typePoem">Enter the type of work</label>
                    <select name="section" v-model="work.section" id="typePoem">
                        <option v-for="type in listTypesOfWorks" :value="type" v-bind:key='type'>{{type}}</option>
                    </select>
                    <label for="genreOf">Enter the genre of work</label>
                    <select name="genre" v-model="work.genre" id="genreOf">
                         <option v-for="genre in listGenreOfWorks" :value="genre" v-bind:key='genre'>{{genre}}</option>
                    </select>
              </div>  
                <!-- <input type="text" > -->
                <div class="rightSideAdd">
                    <label for="textAreaText">Enter your work please or load text from file</label>
                    <textarea v-model="work.text" id="textAreaText" v-on:change="handleChange" v-on:keyup="handleTextArea">

                    </textarea>
                </div>
                <FileReaderButton @load="work.text = $event"></FileReaderButton>
                </div>
                <!-- <img src="/src/img/bg.jpg" alt="bf" @click="addWork()"> -->
                <!-- <a href="/src/img/bg.jpg" download="">aaaa</a> -->
                <label for="file">Upload your fulcrum photo</label>
                <input type="file" id="file" ref="file" class="fileImg" v-on:change="handleFileUpload()" />
                            
                <div class="butBlock">
                        <button class="workAdderButton" @click="addWork()">Add work</button>
                </div>

 
        </div></div>
        <Footer />
    </form>
</template>

<script>

    import Vue from "vue";
    import Vuex from "vuex";
    import axios from "axios";
    import VueAxios from "vue-axios";

    import Header from './Header.vue' 
    import Footer from './Footer.vue' 
    import FileReaderButton from "./FileReaderButton.vue";

    Vue.use(VueAxios, axios)

    export default {
        components: {
            Header,
            Footer,
            FileReaderButton,
        },
        data(){
            return{
                showModal: false,
                typesOfWorks : {},
                typeOfWork : '',
                genreOfWork : '',
                currentUser : {},
                showedText: '',
                file: '',
                text: '', 
                work : {
                    name : ' ',
                    section : '',
                    genre : '',
                    author : '',
                    text : '',
                    image : '/src/img/covers/poem3.jpg',
                    authorId : '',
                    date : ''
                }
            }
        },
        mounted(){
            this.currentUser = this.$store.getters.getCurrentUser;
            Vue.axios.get('http://localhost:3000/typesOfWorks').then(response => {
                console.log(response.data[0]);
                this.typesOfWorks = response.data[0];
            });   
        },
        methods : {
            addWork(){
                Vue.axios.put("http://localhost:3000/works/"+this.work._id, JSON.parse(JSON.stringify(this.work))).then(response => {
                    console.log(response.data);
                })
                // $router.push("/");
            },
            submitFileText(){
                let formData = new FormData();
                formData.append('file', this.file);
                console.log(formData);
            },
            handleTextArea : function(e) {
            // if (e.keyCode === 13) {
            //     this.work.text += "</br>"
            // } 
            // else if (e.keyCode === 50) {
            //     alert('@ was pressed');
            // }      
            // this.log += e.key;
            //  console.log(this.work.text);
            },
            noop(){},
            handleChange : function(e) {
                this.text = JSON.stringify(e.target.value);
                console.log(e.target.value);
            },
            createWorkForImg(){
                let d = new Date();
                let curr_date = d.getDate();
                let curr_month = d.getMonth() + 1;
                let curr_year = d.getFullYear();
                this.work.date = curr_year + "-" + curr_month + "-" + curr_date;
                this.work.author = this.currentUser.about_u.name;
                this.work.authorId = this.currentUser._id;
                Vue.axios.post("http://localhost:3000/works", JSON.parse(JSON.stringify(this.work))).then(response => {
                    console.log(response.data);
                    this.work = response.data;
                    this.submitFile();
                    this.work.image = '../uploads/image/' + this.work._id + '.jpg';
                })
                
            },
            submitFile() {
                let formData = new FormData();
                formData.append('file', this.file);
                formData.append('student_id', this.work._id);
                Vue.axios.post('http://localhost:3000/uploadphoto', formData, { headers: {
                        'Content-Type': 'multipart/form-data'
                        }
                    }).then(function () {
                        console.log('SUCCESS!!');
                    })
                    .catch(function () {
                    console.log('FAILURE!!');
                    });
                },
           handleFileUpload() {
                this.file = this.$refs.file.files[0];
                this.createWorkForImg();
                this.work.image = '../uploads/image/' + this.work._id + '.jpg';
            },
            // handleFileTextUpload() {
            //     this.file = this.$refs.file.files[1];
                
            //     // this.createWorkForImg();
            //     // this.work.image = '../uploads/image/' + this.work._id + '.jpg';
            // },
        },
        computed : {
            listTypesOfWorks(){
                var types = [];
                for(let key in this.typesOfWorks){
                    if(key != '_id' && key != '__v'){
                        types.push(key);
                    }
                }
                if(types[0] !== undefined){
                    this.work.section = types[0];
                } 
                return types;
            },
            listGenreOfWorks(){
                var genre = [];

                if(this.typesOfWorks[this.work.section] !== undefined)
                    genre = this.typesOfWorks[this.work.section];
                    this.work.genre = genre[0];

                return genre;
            }
        }
    }
</script>

<style scoped>

.fullStackBlock{
    display: flex;
    flex-direction: column;
    min-height: 100%;
}
body{
    height: 100%;
}

.fullAddWorkBlock{
    padding-top: 5.5%;
    padding-bottom: 3%;
    background-color: #f5f5f5;
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 85vh;
}

.fullSide{
        display: flex;
    /* flex-direction: row;  */
    justify-content: space-around;
     width: 100%;
     padding-bottom: 3.45%;
}

.leftSideAdd{
    display: flex;
    flex-direction: column;
}

.leftSideAdd label:hover{
    font-weight: 600;
    transition: 0.3s;
}

.leftSideAdd label{
    margin-top: 12.5%;
    padding-bottom: 5%;
}

.leftSideAdd label:first-child{
    margin-top: 0;
}

.rightSideAdd{
        width: 65%;
}

.rightSideAdd textarea{
    margin-top: 2%;
    width: 100%;
    min-height: 160px;
    font-size: 1rem;
    line-height: 1.1rem;
    font-weight: 500;
}

textarea,
input,
select{
    background-color: #f2f2f2;
    padding: 1%;
}

label{
    font-size: 0.95rem;
}

.butBlock{
   display: flex;
   justify-content: center;
}

.workAdderButton{
    text-align: center;
    /* margin: 0 auto; */
    padding: 1.25%;
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.2rem;
    width: 20%;
    text-transform: uppercase;
    transition: 0.5s;
}

.workAdderButton:hover{
    transition: 0.5s;
    background-color: #000;
    color: #fff;
    border-color: #fff;
}

@media screen and (max-width: 650px){
    .fullSide{
        display: flex;
        flex-direction: column;
        padding-top: 3%;
        padding-right: 2%;
        padding-left: 2%;
    }
    .leftSideAdd label{
        margin-top: 4%;
        padding-bottom: 1%;
    }
    .rightSideAdd{
        padding-top: 4.5%;
    }
    .rightSideAdd textarea{
        width: 150%;
    }
    .workAdderButton{
        width: 40%;
        margin-top: 3%;
    }
}
</style>