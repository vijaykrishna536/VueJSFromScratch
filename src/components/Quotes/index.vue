<template>
    <div class="main">
        <h1> Quotes Booklet </h1>
        <h4> Store the quotes that inspire you the most...</h4>
        <h3> Quotes Added {{numberOfQuotes}} /{{maxQuotes}} </h3>
        <div class="healthbar">
            <div class="healthbar text-center" style="background-color: #3b5998; margin: 0px; color: white;"
                :style="{width:numberOfQuotes*10+'%'}">
                    {{numberOfQuotes}}
            </div>
        </div>
        <div class="quotemachine">
            <h5> Quote your Quote </h5>
            <textarea id="quoteenter" v-model="quote" v-on:click="disable()" required> </textarea>
            <h6 v-if="noQuote">Please enter a quote... </h6>
            <h6 v-if="numberOfQuotes==maxQuotes"> Limit reached please deleate a few to enter new </h6>
        </div>
        <button v-on:click="addQuotes()"> Add Quotes </button>
        <div class="quotebox">
            <QuoteBox v-for="index in quoteList" :key="index" :quotes="index" @delete="remove($event)"></QuoteBox>
        </div>
        <div class="foot">
            <span> Info : Click on the Quotes to delete it. </span>
        </div>
    </div>
</template>

<script src='./Quotes.js'> </script>

<style scoped>
.main { 
    margin: auto; 
    border: 3px solid #3b5998;
    padding: 10px;
    width: 70%;
    background-color: whitesmoke;
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
.main button {
    background-color: #3b5998;
    margin-top: 6px; 
    color:white;
    width: 12%;
    height: 33px;
    border-radius:10px;
}
.main button :hover {
    background-color: chartreuse;
}
.foot {
    background-color: #dfe3ee;
    margin-top: 10px;
    margin-left: 15px;
    width: 97%;
    color: #3b5998;

}
.healthbar {
    width: 97%;
    height: 20px;
    background-color: #eee;
    margin-top:1px;
    margin-left: 15px;
    transition: width 500ms;
    border-radius: 5px;
}
.quotebox {
    margin-top:10px;
    margin-left: 15px;
    width:94%;
}
.quotebox QuoteBox {
    height: 200px;
}
.quotemachine h5 {
    /* position: element(#quoteenter); */
    margin-bottom: 2px;
    font-weight:bold;
}
.quotemachine h6 {
    color:red;
    margin-bottom: 1px;
    margin-top: 1px;
}
.quotemachine textarea {
    border-radius:5px;
    height:50px;
    width:50%;
    size : 5em;
}
</style>