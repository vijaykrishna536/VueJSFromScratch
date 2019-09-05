import axios from "axios";

export default {
    state : {
        users: {}

    },
    getters : {
        getUsers (state) {
            return state.users
        }
    },
    mutations : {
        setUsers (state , payload) {
            Object.assign(state,{users:payload})

        }
    },
    actions : {
        GET_USER_LIST ({commit}) {
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    console.log("Data is being fetched",response.data)
                    commit('setUsers',response.data)
                })
                .catch(error=>console.log(error))


        }
        
    }

}