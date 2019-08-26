<template>
    <div>
        <div id="app">
            <div class="slider">
                <ul class="slides" :style="style">
                    <li v-for="(slide,i) in playslides" :key="i">
                        <div class="img" :style="{ backgroundImage: `url(${slide.img})` }"></div>
                    </li>
                </ul>
                <ul class="indicators">
                    <li v-for="(slide,i) in slides" :key="i" @click="selectSlide(i)" :class="i==current ? 'active' : null">
                        <div class="item">
                            <span class="title">{{slide.title}}</span>
                            <span class="progress">
                                <div class="fill" :style="{ width: `${percent}%`}"></div>
                                <div class="dot"></div>
                            </span>
                            <p class="mark">{{slide.mark}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script src='./Seoul.js'></script>

<style scoped>
.slider {
    position: relative;
    z-index: 1;
    overflow: hidden;
    height: 100vh;
}
.slider ul{
    list-style: none;
}

.slides {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    transition: top 800ms;
}

.slides li {
    height: 100%;
}
        
.img {
    height: 100%;
    background-size: cover;
    background-position: 50%;
    max-width: 100%;
    max-height: 100%;
}

.indicators {
    position: absolute;
    padding-right: 40px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    text-align: right;
}
      
.indicators li {
    clear: both;
}

.item {
    position: relative;
    margin-bottom: 16px;
    float: right;

}
          
        /* &:last-child
          .item
            margin-bottom: 0 */
.title {
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-family: 'SegoeUI-Bold';
    transition: font-size 0.6s ease-out;
}
          
.mark {
    color: #fff;
    font-family: 'SegoeUI-Semilight';
}
          
.dot {
    position: absolute;
    top: 50%;
    right: -20px;
    margin-top: -5.5px;
    margin-left: 10px;
    width: 11px;
    height: 11px;
    background: #fff;
    border-radius: 50%;
}
          
.progress {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 2px;
    margin: 8px 0;
    background: rgba(255, 255, 255, .5);
}
          
.active .title {
    transition: font-size 0.6s ease-in;
    font-size: 36px;
    font-family: 'SegoeUI-Light';
}
            
.progress .fill {
    height: 100%;
    background: #fff;
}
            
</style>