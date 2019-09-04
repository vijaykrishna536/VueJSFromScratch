<template>
    <div class="main">
        <h1> CSS Practise </h1>
        <h4> Let's dive deep... </h4>
        <section class="section0" v-if="section0">
            <h1> Your freedom is here </h1>
            <h3> Choose Your Plan </h3>
            <h4> Make sure you get most of money </h4>
        </section>
    </div>
</template>

<script src="./CSS.js"></script>

<style scoped>
.main {
    margin: auto; 
    border: 3px solid #1c8ae4;
    padding: 10px;
    width: 70%;
    border-radius:25px;
}

.main h1 {
    margin-bottom: 1px; 
}

.main h4 {
    margin-top: 1px; 
}

.main h3 {
    margin-left: 15px;
    margin-bottom:2px;
    padding: 2px;
    text-align:left;
}

.section0 h1 {
    background-color: purple;
    color: aliceblue;
    font-style: bold;
    text-align: left;
    padding-left: 5px;
}
.section0 h3 {
    color: green;
    text-align: left;
    margin-bottom: 5px;
    margin-left: 0px;
}
.section0 h4 {
    text-align: left;
    padding-left: 5px;
}
</style>