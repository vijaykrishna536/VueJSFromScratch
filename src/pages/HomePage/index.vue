<template>
    <div>
        <div class='opening'>
            <h1> FUNZONE </h1>
            <h3>Let's get Started</h3>
        </div>
        <div>
            <router-link :to="'/start'"><button> Let's Get Started</button></router-link>
        </div>
    </div>
</template>





<script src="./HomePage.js"></script>
<style type="text/css" scoped>
.videocontainer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
}
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    opacity: 0.5;
}
/* .overlay :hover {
    background-color: rgba(0,0,0,0.4);
} */
#myCarousel {
  position: fixed;
  right: 0;
  bottom: 0;
  object-fit: fill;
  min-width: 100%; 
  min-height: 100%;
}
.opening{
    text-align: center
}
</style>