<template>
    <div>
        <Header />
        <div class="fullOnePageBlock">
            <div class="container"> 
                <div class="authorBlock">
                    <h2>{{work.name}}</h2>
                    <router-link :to="'/profile/'+work.authorId"><p class="author__one-page">{{work.author}}</p></router-link>
                    <p v-if="isAuthor == 'true'"  class="deleteButton" @click="editWork()">РЕДАГУВАТИ</p>
                    <p v-if="isAuthor == 'true'" @click="active = !active" class="deleteButton">УДАЛИТЬ</p>
                </div>
                <div v-show="active" class="warning">
                   <p> Ви впевнені, що хочете видалити роботу?</p>
                   <div class="buttons__warning">
                       <button class="button__warning success" @click="deleteWork()">Так</button>
                       <button class="button__warning disuccess" @click="active =!active">Ні</button>
                   </div>
                </div>
                <textarea name="" id="textArea" v-model="work.text" ></textarea>
                <!-- <p class="work__text">{{work.text}}</p> -->
                <!-- <div v-show="isEdit == true">
                    <textarea name="" v-model="work.text" id="" cols="30" rows="10">
                        
                    </textarea>
                </div>
                <div  v-show="isEdit == false" class="fullArticleBlock"  v-bind:class="!isHidden ? 'text' : 'new__text'" >
                   {{work.text}}
                </div> -->

                <!-- <FileReader v-bind:text="work.text"/> -->

                <!-- <div class="learn__more" @click="() => isHidden = !isHidden">{{!isHidden ? "Детальніше" : "Приховати"}}</div> -->
                
                <div class="functionsOnePage">
                    <div class="downloadBut" @click="downloadText(work._id)">
                        Завантажити
                    </div>
                    <!-- <div class="readAllMore">Read More</div> -->
                </div>
            </div>
        </div>
        <Footer />
    </div>    
</template>

<script>
    import Vue from "vue";
    import Vuex from "vuex";
    import axios from "axios";
    import VueAxios from "vue-axios";
    import VueMaterial from 'vue-material';
    
    // import clampy from '@clampy-js/vue-clampy';
    // import 'vue-material/dist/vue-material.min.css'
    // import 'vue-material/dist/theme/default.css'
    import Header from './Header.vue' 
    import Footer from './Footer.vue'
    import FileReader from "./FileReader.vue"

    Vue.use(VueMaterial)
    Vue.use(VueAxios, axios)
// Vue.use(clampy);

// Vue.use(clampy, {
//   truncationChar: '✂️'
// });
export default {
    // directives: {
    // clampy
    // },
    components: {
        Header,
        Footer,
        FileReader,
    },
    data(){
        return{
            work : '',
            isAuthor : 'false',
            active: false,
            value: null,
            isEdit: false,
            isHidden: false,
            text: `sadasdassas
                    asdsada
                    asdasd`,
        }
    },
    mounted(){
        Vue.axios.get("http://localhost:3000/works/" + this.$route.params.id).then(response=>{
            console.log(response.data);
            this.work = response.data;
            document.getElementById('textArea').innerHTML = this.work.text;
            let currentUser= this.$store.getters.getCurrentUser;
            console.log(this.work.authorId, currentUser._id);
            if(this.work.authorId == currentUser._id){ 
                this.isAuthor ='true';
            }
        })
        // var s = '<h1 id="myDiv">asdas</h1>';
        // var htmlObject = document.getElementById('txt');
        // htmlObject.innerHTML = s;
        // this.work = htmlObject;
    },
    methods : {
        deleteWork() {

            Vue.axios.delete('http://localhost:3000/works/'+this.work._id).then(response=>{
                console.log(response.data);
                this.$router.push('/');
            })
        },
        editWork(){
            Vue.axios.put('http://localhost:3000/works/'+this.work._id, JSON.parse(JSON.stringify(this.work))).then((response)=>{
                console.log("success");
                this.$router.push('/');
            })
        },
        onConfirm() {
        this.value = 'Agreed'
        },

        onCancel() {
            this.value = 'Disagreed'
        },

        downloadText(id) {
            var textToWrite = document.getElementById('textArea').value;
            var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
            var fileNameToSaveAs = `${id}.txt`;

            var downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download File";
            if (window.webkitURL != null) {
                // Chrome allows the link to be clicked without actually adding it to the DOM.
                downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            } else {
                // Firefox requires the link to be added to the DOM before it can be clicked.
                downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                downloadLink.onclick = destroyClickedElement;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
            }

            downloadLink.click();
        }
    }
}
</script>

<style>
.fullOnePageBlock{
    background-color: #f2f2f2;
    padding-top: 2%;
    padding-bottom: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 85vh;
}

.authorBlock{
    text-align: left;
    padding-left: 1.25%;
    margin-bottom: 40px;
}

.authorBlock h2{
    font-size: 4.85rem;
    color: #000;
    font-weight: 700;
    padding-bottom: 1.5%;
}

.authorBlock p{
    font-size: 1.5rem;
    color:#707970;
}

.fullArticleBlock{
    text-align: center;
    width: 85%;
    margin: 0 auto;
    padding-top: 5%;
    padding-bottom: 5%;

}

.fullArticleBlock p{
    color: #000;
    font-size: 1.2rem;
    line-height: 2.4rem;  
}

.functionsOnePage{
    display: flex;
    justify-content: space-between;
    padding-bottom: 1%;
}

#textArea{
    max-width: 950px;
    /* height: 300px; */
    background-color: rgba(255, 255, 255, 0.082);
    margin: auto;
    width: 100%;
    display: flex;
    border: none;
    /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.5); */
    border-radius: 10px;
    padding: 15px;
    resize: none;
    font-size: 18px;
    line-height: 28px;
    /* overflow: hidden; */
    /* min-height: 100vh;     */
}

.downloadBut,
.readAllMore{
    margin-top: 40px;
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
    transition: 0.1s;
    cursor: pointer;
}

.downloadBut:hover,
.readAllMore:hover{
    transition: 0.1s;
    /* border-bottom: 1.5px solid #000; */
    font-weight: 600;
}
.deleteButton{
    cursor: pointer;
    padding-top: 2%;
}
.warning{
    max-width: 500px;
    width: 100%;
    margin: auto;
    background-color: rgb(226, 226, 226);
    color: #000;
    font-size: 20px;
    font-weight: 600;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    flex-direction: column;
}
.work__text{
    max-width: 750px;
    width: 100%;
    margin: auto;
    font-size: 18px;
    line-height: 40px;
    padding: 40px 0px;
    display: block;
}
.warning p{
    padding-bottom: 20px
}
.button__warning{
    height: 30px;
    width: 100px;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
    /* margin-top: 20px; */
}
.author__one-page{
    font-size: 30px;
}
.buttons__warning{
   
    /* display: flex;
    justify-content: space-around; */
}

.success{
    border: 1px solid rgb(56, 177, 0);
    background-color: rgb(56, 177, 0);
}

.disuccess{
    border: 1px solid rgb(177, 0, 0);
    background-color: rgb(177, 0, 0);
}

a{
    text-decoration: none;
}

.text{
    height: 300px;
    overflow: hidden;
	text-overflow: ellipsis;
    margin-bottom: 20px;
}

.new__text{
    margin-bottom: 20px;
    height: auto;
}

.learn__more{
    /* margin-top: 25px; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    background-color: #fff;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    width: 200px;
    margin: auto;
    border: 1px solid rgba(0, 0, 0, 0.288);
    border-radius: 10px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
</style>