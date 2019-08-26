import axios from 'axios'
import { mapGetters, mapActions } from 'vuex' 

export default {
    name:'UserList',
    data () {
        return {
            newUser:{
                name:'',
                email:'',
                phone:'',
            },
            users:[

            ]
        }
    },
    methods:{
        ...mapActions ({
            GET_USER_LIST : 'GET_USER_LIST'
        }),

        clean () {
            this.users=[];
        },
        clear () {
          this.newUser.name='',
          this.newUser.email='',
          this.newUser.phone=''
        },
        addUser (){
            this.users.push({
                name:this.newUser.name,
                email:this.newUser.email,
                phone:this.newUser.phone,
                contacted:false
                });
            this.clear();
            
        },
        deleteUser (user){
            this.users.splice(this.users.indexOf(user),1);
        },
        callUser () {
            
            this.$store.dispatch('GET_USER_LIST');
            this.users =this.usersList
            // axios.get('https://jsonplaceholder.typicode.com/users')
            // .then(response=>(this.users=response.data))
            // .catch(error=>console.log(console.error))
            //this.users = this.usersList;
        }
    },
    computed : {
        ...mapGetters ({
            usersList : 'getUsers'
        })
    },
}