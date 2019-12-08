<template>
    <div class="fullStackBlock">
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
                    <label for="textAreaText">Enter your work please</label>
                    <textarea v-model="work.text" id="textAreaText">

                    </textarea>
                </div>
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
                showModal: false,
                typesOfWorks : {},
                typeOfWork : '',
                genreOfWork : '',
                currentUser : {},
                work : {
                    name : ' ',
                    section : 'Verses',
                    genre : 'Heart-to-heart',
                    author : '',
                    text : '<p>Расскаты грома по небу ночному,</p>\n<p>Слышны были и немому и глухому,</p>\n<p>А слепой безногий дед,</p>\n<p>Бежал за ними в след,</p>\n<p>Но впереди лишь тени были,</p>\n<p>Что били хозяев своих,</p>\n<p>Там мышка кошку гнала в нору,</p>\n<p>А тип со странной формой,</p>\n<p>Стоял погруженный в кому,</p>\n<p>Без мыслей о высоком,</p>\n<p>Ему б платили, он стоял,</p>\n<p>Перестали, он б стрелял,</p>\n<p>Ещё дальше, где-то в переулке,</p>\n<p>Стояла пара человек, возле дурки,</p>\n<p>Их послали в след за теми,</p>\n<p>Кто назвал планету шаром,</p>\n<p>Кто сказал что бога нет,</p>\n<p>И тут же Божа Кара,</p>\n<p>Снезошла на них,</p>\n<p>Карма.. Может...</p>\n<p>Но скорее просто кожа,</p>\n<p>Черная была...</p>\n<p>Кто быстрее прыгнет,</p>\n<p>Того и тапки,</p>\n<p>Кто заплатит больше,</p>\n<p>Тот и раньше встанет,</p>\n<p>Часов в 3 утра,</p>\n<p>С другом водкой,</p>\n<p>Пошел управлять подводной лодкой,</p>\n<p>Он взорвал Америку, всю Гейропу,</p>\n<p>Стал героем...</p>\n<p>Получил два жетона на метро,</p>\n<p>Один домой, второй на свалку...</p>',
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