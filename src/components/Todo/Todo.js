export default {
    name: 'Todo',
    data () {
        return {
            todoitem:'',
            isEmpty:false,
            todolist:[
            ]    
        }
    },
    methods:{
        addTask : function () {
            if(this.todoitem!=='') {
                this.todolist.push(this.todoitem);
                this.clearbox();
                this.change();
            } else {
                this.isEmpty=true;
            }
            
    
        },
        deleteTask : function (todo) {
            this.todolist.splice(this.todolist.indexOf(todo),1);
        },
        clearbox () {
            this.todoitem='';
        },
        change () {
            
                if(this.isEmpty==true)
                    this.isEmpty=false;           
        }
    }
}  
