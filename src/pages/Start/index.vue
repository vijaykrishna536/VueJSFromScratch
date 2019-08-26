<template>
    <div>
        <div class="videocontainer">
            <div class="overlay">
                <video id="myVideo" playsinline autoplay muted loop> 
                    <source v-if="selectedComponent===WeatherApp" src="@/assets/Cloud-2142.mp4" type="video/mp4">
                    <source v-else src="@/assets/Library-846.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <div class="maincomponent">
            <span @click="selectedComponent='Todo'"> Todo </span>
            <span @click="selectedComponent='NumberGuessing'">Number Guessing</span>
            <span @click="selectedComponent='LoanCalculator'">Loan Calculator</span> 
            <span @click="selectedComponent='UserList'"> User List </span>
            <span @click="selectedComponent='WeatherApp'">Weather App</span> 
            <span @click="selectedComponent='GitHub'"> Github Profile </span> 
            <span @click="selectedComponent='BattleGround'"> Battle Ground </span>
            <span @click="selectedComponent='Quotes'"> Quotes </span> 
            <span @click="selectedComponent='Animation'"> Animation </span>
            <span @click="selectedComponent='Quiz'"> Quiz </span>
            <span @click="selectedComponent='Others'"> CSS Play </span>
            <span @click="selectedComponent='Seoul'"> Seoul </span>
            <!-- <h2> {{selectedComponent}}</h2> -->
            <transition name="fade" mode='out-in'>
                <keep-alive>
                    <component class="childcomponent" :is = "selectedComponent" v-on:newComponent = "selectedComponent = $event"></component>
                </keep-alive>
            </transition>
            <div class="navigation" v-if="selectedComponent!=''">
                <button @click="getRidOfComponents()"> Get Rid Of It!!! </button>
            </div>
        </div>
    </div>
</template>


<script src="./Start.js"></script>

<style type="text/css" scoped>
.videocontainer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -2;
}
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    opacity: 0.5;
}
.overlay :hover {
    background-color: rgba(0,0,0,0.5);
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  object-fit: fill;
  max-width: 100%; 
  max-height: 100%;
}
.maincomponent{
    margin-top: 10px;
    width:100%;

}
.maincomponent span {
    padding: 5px;
    text-decoration: none;
    border: 2px #000000;
    background: gray;
    color: white;
}
.childcomponent {
    margin-top: 30px;
}
.navigation button{
    margin-top: 15px;
    size: 10px;
    padding: 5px;
    width: 10%;   
}
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 1s;
}
.fade-leave {
    opacity: 1;
}
.fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
}
</style>