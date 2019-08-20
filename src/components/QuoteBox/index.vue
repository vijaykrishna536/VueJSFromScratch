<template>
    <div class="maincontainer">
        <textarea v-on:click="removeQuote()" v-model="quotes" readonly>
        </textarea>
    </div>
</template>

<script src="./QuoteBox.js"></script>

<style scoped>
.maincontainer textarea {
    width:100%;
    height:100%;
    border-radius: 10px;
    font-style:italic;
    font-weight:bold;
    text-align:center;
    size: 10em;
    font-family: Georgia, "Times New Roman", Times, serif;
    padding:10px;
}
.maincontainer textarea:hover {
    background-color: lightsalmon;
}
</style>