<template>
    <div class="main">
        <h1> QUIZUP </h1>
        <h4>Read Before you jump in...</h4>
        <ol>
            <li> Play only if you're not weak at brain !!</li>
            <li> Right Answer leads you to more difficult questions</li>
            <li> Incorrect Answer gets you kicked</li>
            <li> Do you dare to enter ? </li>
        </ol> 
        <span class="navigation">
            <button @click="loadNewComponent('Quiz')">Bring it on!! </button>
            <button @click="loadNewComponent('')">Not my cup of tea </button>
        </span>
    </div>
</template>

<script src="./QuizInstruction.js">
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
.main ol {
    list-style-type: none;
    margin-bottom: 5px;
}
.navigation button{
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    width: 20%;   
}
.navigation button:hover {
    background-color: #ff8d1c;
}
</style>