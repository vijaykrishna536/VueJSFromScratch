import axios from "axios";

export default {
    store : {
        users :[]

    },
    getters : {
        getUsers (state) {
            return state.state.users
        }
    },
    mutations : {
        setUsers (state , payload) {
            state.users = payload;
        }
    },
    actions : {
        GET_USER_LIST ({commit}) {
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    console.log(response.data)
                    commit('setUsers',response.data)
                })
                .catch(error=>console.log(console.error))


        }
        
    }

}