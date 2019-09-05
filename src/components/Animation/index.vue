<template>
    <div class="main">
        <h1> Animation World </h1>
        <h4> Get back to your childhood days... </h4>
         <transition name="slide">
            <div class="magic1" v-if="status"> This is different Huh!! </div>
        </transition>
        <button v-on:click="updateStatus()"> Show Me Magic </button>
        <transition name="fade">
            <div class="magic" v-if="status">Welcome Abord </div>
        </transition>
       



    </div>
</template>

<script src='./Animation.js'></script>

<style scoped>
.main{
    margin: auto; 
    border: 3px solid rgb(243, 177, 35);
    padding: 10px;
    width: 60%;
    background-color: whitesmoke;
    border-radius: 30px;
}
.main h1 {
    margin-bottom: 1px; 
}
.main h4 {
    margin-top: 1px; 
}
.magic {
    background-color: rgb(238, 214, 161);
    margin-top: 10px;
    margin-bottom: 15px;
    color: rgb(241, 170, 15);
    width:96%;
    margin-left: 10px;
}
.magic1 {
    background-color: rgb(238, 214, 161);
    margin-top: 10px;
    margin-bottom: 15px;
    color: rgb(241, 170, 15);
    width:46%;
    margin-left: 200px;
}
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 2s;
}
.fade-leave {
    opacity: 1;
}
.fade-leave-active {
    transition: opacity 2s;
    opacity: 0;
}
/* .slide-enter {
    opacity: 0;
} */
.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
}
/* .slide-leave {
    opacity: 1;
} */
.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
}
@keyframes slide-in {
    from {
        transform: translateY(2px);
    }
    to {
        transform: translateY(0);
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(2px);
    }
}
</style>