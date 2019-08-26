<template>
    <div>
        <!-- <div class="videocontainer">
            <div class="overlay">
                <mdb-carousel :interval="8000" showControls showIndicators id="myCarousel">
                    <mdb-carousel-item img src="@/assets/assets/adventure-automobile-classic-2533092.jpg" alt="First slide" />
                    <mdb-carousel-item img src="@/assets/adventure-blur-close-up-346885.jpg" alt="Second slide" />
                    <mdb-carousel-item img src="@/assets/coconut-trees-couple-daylight-2174656.jpg" alt="Third slide" />
                </mdb-carousel>
            </div>
            https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ
        </div> -->
        <div class='opening'>
            <h1> FUNZONE </h1>
            <h3>Let's get Started</h3>
        </div>
        <div>
            <!-- <img src="@/assets/coconut-trees-couple-daylight-2174656.jpg"> -->
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