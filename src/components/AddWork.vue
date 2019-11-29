<template>
    <div>
        <div class="fullAddWorkBlock">
                <div class="fullSide">
              <div class="leftSideAdd">
                    <label for="nameOfWork">Enter the name of the work</label>
                    <input type="text" v-model="work.name" id="nameOfWork">
                    <label for="typePoem">Enter the type of work</label>
                    <select name="section" v-model="work.section" id="typePoem">
                        <option value="Poem">Poem</option>
                        <option value="Poem">Poem</option>
                        <option value="Poem">Poem</option>
                    </select>
                    <label for="genreOf">Enter the genre of work</label>
                    <select name="genre" v-model="work.genre" id="genreOf">
                        <option value="Social verse">Social verse</option>
                        <option value="Social verse">Social verse</option>
                        <option value="Social verse">Social verse</option>
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
                <div class="butBlock">
                        <button class="workAdderButton" @click="addWork()">Add work</button>
                </div>
                
 
        </div>
        
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
                work : {
                    name : '123',
                    section : '123',
                    genre : '123',
                    autor : '123',
                    text : '123',
                    image : '123',
                    authorId : '123',
                    date : '123'
                }
            }
        },
        methods : {
            addWork(){
                let d = new Date();
                let curr_date = d.getDate();
                let curr_month = d.getMonth() + 1;
                let curr_year = d.getFullYear();
                this.work.date = curr_year + "-" + curr_month + "-" + curr_date;
                Vue.axios.post("http://localhost:3000/works", JSON.parse(JSON.stringify(this.work))).then(response => {
                    console.log(response.data);
                })
            },
            onClick() {
              axios({
                    url: 'http://localhost:3000/works',
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');
   
                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'file.pdf');
                     document.body.appendChild(fileLink);
   
                     fileLink.click();
                });
          }
        }
    }
//     import $ from "jquery";
// var dropZone = $('#upload-container');
// dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
//      return false;
// });
// dropZone.on('dragover dragenter', function() {
//      dropZone.addClass('dragover');
// });

// dropZone.on('dragleave', function(e) {
//      dropZone.removeClass('dragover');
// });
// dropZone.on('dragleave', function(e) {
//      let dx = e.pageX - dropZone.offset().left;
//      let dy = e.pageY - dropZone.offset().top;
//      if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
//           dropZone.removeClass('dragover');
//      };
// });
//     $('#file-input').change(function() {
//         let files = this.files;
//         sendFiles(files);
//     });

// dropZone.on('drop', function(e) {
//      dropZone.removeClass('dragover');
//      let files = e.originalEvent.dataTransfer.files;
//      sendFiles(files);
// });
//     function sendFiles(files) {
//      let maxFileSize = 5242880;
//      let Data = new FormData();
//      $(files).each(function(index, file) {
//           if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
//                Data.append('images[]', file);
//           }
//      });
// };
// $.ajax({
//      url: dropZone.attr('action'),
//      type: dropZone.attr('method'),
//      data: Data,
//      contentType: false,
//      processData: false,
//      success: function(data) {
//           alert('Файлы были успешно загружены');
//      }
// });
</script>

<style scoped>
.fullAddWorkBlock{
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    background-color: #f5f5f5;
    padding-left: 5%;

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
</style>