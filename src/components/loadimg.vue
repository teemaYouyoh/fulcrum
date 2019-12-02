

<template>
    <div>
        <label>File
           <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
   </label>
   <button v-on:click="submitFile()">Submit</button>
   <button @click="getUserData()">geet</button>
    </div> 
</template>

<script>

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios)

export default {
  data(){
    return{
      currentUser : null,
    }
  },
  mounted(){
    this.currentUser = this.$store.getters.getCurrentUser;

  },
  methods:{
   submitFile() {
               let formData = new FormData();
               formData.append('file', this.file);
               formData.append('student_id', this.currentUser._id);
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
               }

  },
  computed : {
    
   }
}
</script>