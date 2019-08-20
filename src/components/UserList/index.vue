<template>
    <div>
        <div class="main">
            <h1> USERS</h1>
            <h4>Get to know your team better...</h4>
            <div class="form">
                <input type="text" v-model="newUser.name" placeholder="Enter Name" required>
                <input type="email" v-model="newUser.email" placeholder="Enter Email" required>
                <input v-model="newUser.phone" placeholder="Enter Phone" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" required>
                <div>
                <button v-on:click="addUser()"> Add User </button>
                </div>
            </div>
            <ul class="details">
                <li v-for="user in users" :key="user" >
                    <input type="checkbox" v-model="user.contacted">
                    <span v-bind:class="{'contacted':user.contacted}">
                        {{user.name}} : {{user.email}} 
                        <button v-on:click="deleteUser(user)"> Let Go!!</button>
                    </span>
                </li>
            </ul>
            <br><button v-on:click="callUser()"> Fetch Back detais </button>
            <button v-on:click="clean()"> Clear </button>
        </div>
    </div>
</template>


<script src="./UserList.js"></script>


<style type="text/css" scoped>
.main{
    margin: auto; 
    border: 3px solid #73AD21;
    padding: 10px;
    width: 50%
}
.main h1 {
    margin-bottom: 1px; 
}
.main h4{
    margin-top: 1px; 
}
.main ul{
    list-style-type: none;
}
.main button {
    margin-right: 5px;
    margin-left: 5px;
}
.navigation button{
    margin-top: 15px;
    padding: 5px;
    width: 8%;   
}
.contacted {
    text-decoration: line-through;
}
.form input {
    margin-top: 5px;
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
}
.details li {
    margin-top: 5px;
}

</style>