<template >
    <div>
        <div class="main">
            <h1 class="heading">To Do List</h1>
            <span>
                <input type="text" v-model="todoitem" v-on:keyup.enter="addTask()" v-on:click="change()">
                <button class="addButton" v-on:click="addTask()"> Add </button>
            </span>
            <div class="error" v-if="isEmpty"> <h6> Required </h6> </div>
            <ul>
                <transition-group name="slide">
                    <li v-for="(todo,index) in todolist" :key="index">
                        {{ todo }}
                        <button v-on:click="deleteTask(todo)" class="done"> Done</button>
                    </li>
                </transition-group> 
            </ul>        
        </div>
    </div>    
</template>
 
<script src="./Todo.js">
</script>


<style scoped>
.main{
    margin: auto; 
    border: 3px solid coral;
    padding: 10px;
    width: 60%;
    border-radius: 30px;
}
.error h6 {
    color: red;
    margin-top: 2px;
    margin-bottom: 2px;
}
.addButton {
    background-color: coral;
    border-left:12px;
    border-radius: 3px;
}
.done{
    background-color: coral;
    border-radius: 3px;
}
.heading{
    background-color: coral;
    width: 97%;
    padding: 10px;
    border-radius: 3px;
    text-align: center;
    
}
.main ul{
    list-style-type: none; 
}
.navigation button{
    margin-top: 15px;
    padding: 5px;
    width: 8%;   
}
    .slide-enter {
        opacity: 0;
        /*transform: translateY(20px);*/
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateX(20px);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateX(0);
            
        }
        to {
            transform: translateX(20px);
            
        }
    }
</style>