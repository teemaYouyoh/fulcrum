<template>
    <div>
        <Header />
        <div class="fullOnePageBlock">
            <div class="container">
                <div class="authorBlock">
                    <h2>{{work.name}}</h2>
                    <p>{{work.author}}</p>
                </div>
                <div class="fullArticleBlock" id="txt">
                    {{work}}
                </div>

                <div class="functionsOnePage">
                    <div class="downloadBut">
                        Download
                    </div>
                    <div class="readAllMore">Read More</div>
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

    import Header from './Header.vue' 
    import Footer from './Footer.vue' 

    Vue.use(VueAxios, axios)

export default {
    components: {
        Header,
        Footer
    },
    data(){
        return{
            work : ''

        }
    },
    mounted(){
        Vue.axios.get("http://localhost:3000/works/" + this.$route.params.id).then(response=>{
            console.log(response.data);
            this.work = response.data;
            document.getElementById('txt').innerHTML = this.work.text;
        })
        // var s = '<h1 id="myDiv">asdas</h1>';
        // var htmlObject = document.getElementById('txt');
        // htmlObject.innerHTML = s;
        // this.work = htmlObject;
    }
}
</script>

<style>
.fullOnePageBlock{
    background-color: #f2f2f2;
    padding-top: 2%;
    padding-bottom: 2%;
}

.authorBlock{
    text-align: left;
    padding-left: 1.25%;
}

.authorBlock h2{
    font-size: 4.85rem;
    color: #000;
    font-weight: 700;
    padding-bottom: 1.5%;
}

.authorBlock p{
    font-size: 1.2rem;
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

.downloadBut,
.readAllMore{
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

</style>