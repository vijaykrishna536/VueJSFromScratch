<template>
    <div>
        <div class="main">
            <h1>GitHub Profile Finder</h1>
            <h5>Find GitHub users in minutes...</h5>
            Enter Id <input type="text" v-model="user" v-on:keyup.enter="fetchDetails()">
            <div v-if="error" class="error"> Oops! {{user}} doesn't exist in our database</div> 
            <div v-if="isUser" class="details"> 
                <image></image>            
                <span> {{user.avatar_url}} </span>
                <div> 
                    <span> {{user.name}} </span>
                    <span> {{user.email}} </span>
                    <span> </span>
                </div>
                <div>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </div>
            </div>
            <div>
                <button @click="clean()"> Clear </button>
            </div>
        </div>
    </div>
</template>


<script src="./GitHub.js"></script>


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
.main h5 {
    margin-top: 1px; 
}
.navigation button{
    margin-top: 15px;
    padding: 5px;
    width: 8%;   
}
.error {
    color: red;
    font-size: 10px;

}
</style>