<template>
    <div>
        <input type="text" v-model="work.name">
        <select name="section" v-model="work.section">
            <option value="Poem">Poem</option>
            <option value="Poem">Poem</option>
            <option value="Poem">Poem</option>
        </select>
        <select name="genre" v-model="work.genre">
            <option value="Social verse">Social verse</option>
            <option value="Social verse">Social verse</option>
            <option value="Social verse">Social verse</option>
        </select>
        <input type="text" v-model="work.text">
        <!-- <img src="/src/img/bg.jpg" alt="bf" @click="addWork()"> -->
        <!-- <a href="/src/img/bg.jpg" download="">aaaa</a> -->
        <button @click="addWork()">Add work</button>
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
                    authorId : '5ddfd97f993b541d2078aeab',
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

</style>