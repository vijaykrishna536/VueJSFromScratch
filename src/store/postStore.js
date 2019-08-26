import axios from 'axios'

export default {
    state : {
        posts : []
    },
    getters : {
        getPosts(state) {
            return state.posts;
        }

    },
    mutations : {
        setPosts(state, value) {
            state.posts = value
        }
    },
    actions : {
        GET_ALL_POSTS ({commit}) {
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then (response => {
                    console.log(response.data)
                    commit('setPosts',response.data)
                })
                .catch(err => {
                    console.log(err)
                })

        }

    }
}