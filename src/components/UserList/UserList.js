import axios from 'axios'

export default{
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
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>(this.users=response.data))
            .catch(error=>console.log(console.error))
        }
    },
    created(){
        this.callUser();
    }
}