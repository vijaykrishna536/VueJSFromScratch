<template>
    <div>
        <!-- <div :class="{backdrops:isBackdrop}"></div> -->
        <div class="videocontainer">
            <div class="overlay">
                <video id="myVideo" playsinline autoplay muted loop> 
                    <source src="@/assets/Library-846.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <div class="maincomponent">
            <span @click="setSelectedComponent('Todo')"> Todo </span>
            <span @click="setSelectedComponent('NumberGuessing')">Number Guess</span>
            <span @click="setSelectedComponent('LoanCalculator')">Loan Calculator</span> 
            <span @click="setSelectedComponent('UserList')"> User List </span>
            <span @click="setSelectedComponent('WeatherApp')">Weather App</span> 
            <span @click="setSelectedComponent('GitHub')"> Github Profile </span> 
            <span @click="setSelectedComponent('BattleGround')"> Battle Ground </span>
            <span @click="setSelectedComponent('Quotes')"> Quotes </span> 
            <span @click="setSelectedComponent('Animation')"> Animation </span>
            <span @click="setSelectedComponent('Quiz')"> Quiz </span>
            <span @click="setSelectedComponent('Others')"> CSS Play </span>
            <span @click="setSelectedComponent('Seoul')"> Seoul </span>
            <span @click="setSelectedComponent('API')"> API Test </span>
            <span @click="setSelectedComponent('CSS')"> CSS </span>
            <span @click="setSelectedComponent('KeyBoard')"> KeyBoard </span>
            <!-- <h2> {{selectedComponent}}</h2> -->
            <transition name="fade" mode='out-in'>
                <keep-alive>
                    <component class="childcomponent" :is = "selectedComponent"></component>
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
.backdrops {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100vw;
    z-index: 7;
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
    padding: 8px;
    text-decoration: none;
    border: 2px #000000;
    background: gray;
    color: white;
    font-size: 14px;
}
.maincomponent span:hover {
    background: white;
    color: gray;
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