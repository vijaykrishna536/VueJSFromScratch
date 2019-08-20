<template>
    <div>
        <div class="main">
            <h1> GUESS THE NUMBER </h1>
            <h4> and win prizes...</h4>
            <div> 
                <span>
                Guess the Number (0-9) :
                <input v-model="GuessedNumber" v-on:keyup.enter="Check()" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"/>
                </span>   
             </div>
             <textarea v-model="Message" readonly></textarea>
             <br>
             <span class="button">
                <button v-on:click="Clean()">Clear</button>
                <button v-on:click="Shuffle()">Shuffle</button>
             </span>
        </div>
    </div>
</template>


<script src="./NumberGuessing.js"></script>


<style type="text/css" scoped>
.main{
    margin: auto; 
    border: 3px solid #73AD21;
    padding: 10px;
    width: 50%
}
.main h1 {
    margin-bottom: 1px; 
}
.main h4{
    margin-top: 1px; 
}
.main textarea{
    margin-top: 15px;
    width: 45%;
}
.navigation button{
    margin-top: 15px;
    padding: 5px;
    width: 8%;   
}
.button button{
    margin-left: 5px;
    margin-right: 5px;
}
</style>