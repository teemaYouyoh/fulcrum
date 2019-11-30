import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state : {
        currentUser : null
    },
    mutations : {
        setCurrentUser : (state, user) => {
            state.currentUser = user;
        },
        // addNewUser : (state, user) => {
        //     let result = state.usersList.find(item => {return item.name == user.name});
        //     if(result == undefined){
        //         state.usersList.push(user);
        //         state.currentUser = user;
        //     } 
        //     else alert("This user is already registered!"); 
        // }
    },
    getters : {
        getCurrentUser : (state) => {
            return state.currentUser;
        },
    }
});

export default store;