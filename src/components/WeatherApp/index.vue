<template>
    <div>
        <div class="main">
            <h1> Weather App</h1>
            <h4>Know what your city's weather upto in seconds...</h4>
            Enter City <input type="text" v-model="city" v-on:keyup.enter="fetchDetails()">
            <div v-if="error" class="error"> Oops! {{city}} doesn't exist in our database</div> 
            <div v-if="isCity" class="details">             
                <div>Temperature <span>{{weather.temp}}</span></div>
                <div>Humidity <span>{{weather.humidity}}</span></div>
                <div>Sunrise <span>{{weather.sunrise}}</span></div>
                <div>Sunset <span>{{weather.sunset}}</span></div>
            </div>
            <div>
                <button @click="clean()"> Clear </button>
            </div>
        </div>
    </div>
</template>


<script src="./WeatherApp.js"></script>


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
.main h4 {
    margin-top: 1px; 
}
.main input {
    margin-bottom: 5px;
}
.details span {
    width:10%;
}
.error {
    color: red;
    font-size: 10px;

}
.navigation button{
    margin-top: 15px;
    padding: 5px;
    width: 8%;   
}
</style>