<template>
    <div class="mainone">
        <section id="wrapper" class="skewed" v-on:mousemove="animate($event)">
            <div class="layer bottom">
                <div class="content-wrap">
                    <div class="content-body">
                        <h1>Go Crazy</h1>
                        <p>Grab a bike and a friend that is as crazy as you to explore the roads less travelled by</p>
                    </div>
                    <img src="@/assets/coconut-trees-couple-daylight-2174656.jpg" alt="">
                </div>
            </div>
            <div class="layer top" v-bind:style="{width : skew + 'px'}">
                <div class="content-wrap">
                    <div class="content-body">
                        <h1>Go Classy</h1>
                        <p>Call the whole clan, Book a van and take the road that never ends</p>
                    </div>
                    <img src="@/assets/adventure-automobile-classic-2533092.jpg" alt="">
                </div>
            </div>
            <div class="handle" v-bind:style="{left :leftprop + 'px'}"></div>
        </section>
    </div>
</template>

<script src="./Others.js"></script>

<style scoped>
img {
    max-width: 100%;
    max-height: 100%;
}
.mainone {
    margin: 0;
    padding: 0;
    font-size: 100%;
    line-height: 1.6;
    font-family: Arial, Helvetica, sans-serif;
}
#wrapper {
    position: relative;
    width:100%;
    min-height:55vw;
    overflow: hidden;
}
.layer{
  position: absolute;
  width:100vw;
  min-height: 55vw;
  overflow: hidden;
}

.layer .content-wrap{
  position: absolute;
  width:100vw;
  min-height: 55vw;
}

.layer .content-body{
  width:25%;
  position:absolute;
  top:50%;
  text-align: center;
  transform:translateY(-50%);
  color:#fff;
}

.layer img{
  position: absolute;
  width:35%;
  top:50%;
  left: 50%;
  transform:translate(-50%, -50%);
}

.layer h1{
  font-size:2em;
}

.bottom{
  background:#222;
  z-index:1;
}

.bottom .content-body{
  right:5%;
}

.bottom h1{
  color:#FDAB00;
}

.top{
  background:#eee;
  color:#222;
  z-index:2;
  width:50vw;
}

.top .content-body{
  left: 5%;
  color:#222;
}

.handle{
  position: absolute;
  height: 100%;
  display: block;
  background-color: #FDAB00;
  width:5px;
  top:0;
  left: 50%;
  z-index:3;
}

.skewed .handle{
  top:50%;
  transform:rotate(30deg) translateY(-50%);
  height: 200%;
  transform-origin:top;
}

.skewed .top{
  transform: skew(-30deg);
  margin-left:-1000px;
  width: calc(50vw + 1000px);
}

.skewed .top .content-wrap{
  transform: skew(30deg);
  margin-left:1000px;
}

@media(max-width:768px){
  body{
    font-size:75%;
  }
}

</style>