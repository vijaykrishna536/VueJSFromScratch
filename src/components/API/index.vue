<template>
    <div class="main">
        <h1>
            API Testing
        </h1>
        <h4>
            Test all your API in one go...
        </h4>
        <section class="listsection">
            Select an API :
            <select class="List" v-model="SelectedAPI" v-on:change="update()">
                <option v-for="API in APIList" :key="API"> {{ API }} </option>
            </select>
        </section> 
        <section>
            <keep-alive>
                <h1> {{ SelectedAPI }}</h1>
                <component :is= "SelectedAPI" > </component>
            </keep-alive>
        </section>
        <section class="css">
        </section>
    </div>
</template>

<script src="./API.js"></script>

<style scoped>
.main {
    margin: auto; 
    border: 3px solid #be165c;
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
.List {
    margin-left: 10px;
}
</style>