<template>
    <div>
        <div class="main">
            <h1> Battle Ground</h1>
            <h4> Read it before you jump in...</h4>
            <ol>
                <li> Play only if you're not weak at heart !!</li>
                <li> Attack can be done multiple Times</li>
                <li> Special Attack only activates after 3 Attacks</li>
                <li> More than two succesive heals are not allowed</li>
                <li> Do you dare to enter ? </li>
            </ol> 
        <span class="navigation">
            <button @click="loadNewComponent('BattleGround')">Bring it on!! </button>
            <button @click="loadNewComponent('')">Not my cup of tea </button>
        </span>
        </div>
    </div>
</template>


<script src="./BattleGroundInstruction.js"></script>


<style type="text/css" scoped>
.main{
    margin: auto; 
    border: 3px solid #73AD21;
    padding: 10px;
    width: 50%;
    border-radius:25px;
}
.main h1 {
    margin-bottom: 1px; 
}
.main h4 {
    margin-top: 1px; 
}
.main ol {
    list-style-type: none;
    margin-bottom: 5px;
}
.details span {
    width:10%;
}
.error {
    color: red;
    font-size: 10px;

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
    background-color: #73AD21;
}
</style>