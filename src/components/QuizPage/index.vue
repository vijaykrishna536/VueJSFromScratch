<template>
    <div class="main">
        <h1> QUIZUP</h1>
        <h4>Dare to take it...</h4>
        <component :is="currentComponent" ></component>
        <section class="basic" v-if="!quizStart">
            <span>
                <button v-on:click="instruction()"> Instructions </button>
                <button v-on:click="newGame()">  New Game </button>
            </span>
        </section>
        <section class="secondary" v-if="quizStart"> 
            <div>
                <button v-on:click="restart()" > Restart </button>
                <button v-on:click="quit()"> Quit </button>
            </div>
        </section>
    </div>
</template>

<script src="./QuizPage.js">

</script>

<style scoped>
.main{
    margin: auto; 
    border: 3px solid #ff8d1c;
    padding: 10px;
    border-radius:25px;
    width: 70%
}
.main h1 {
    margin-bottom: 1px; 
}
.main h4{
    margin-top: 1px; 
}
.basic {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    background-color:#ffa953;
    padding: 10px;
    width: 94%;
    height: 50px;
    border-radius: 20px;
    margin-left:15px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
}
.basic button {
    height: 40px;
    width: 18%;
    border-radius: 15px;
    margin-left: 20px;
    margin-top: 5px;
    background-color: #ff8000;

}
.basic button:hover{
    background-color: #bbe594;
}
.secondary {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    background-color:#ffa953;
    padding: 10px;
    width: 94%;
    height: 50px;
    border-radius: 20px;
    margin-left:15px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
}
.secondary button {
    height: 40px;
    width: 18%;
    border-radius: 15px;
    margin-left: 20px;
    margin-top: 5px;
    background-color: #ff8000;
}
.secondary button:hover{
    background-color: #bbe594;
}
</style>