<template>
    <div>
        <div class="main">
            <h1> BATTLEGROUND</h1>
            <h4>Hunt or get Hunted...</h4>
            <section class="row">
                <div class="small-6 columns">
                    <h1 class="text-center">YOU</h1>
                    <div class="healthbar">
                        <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;"
                            :style="{width:playerHealth+'%'}">
                            {{playerHealth}}
                        </div>
                    </div>
                </div>
                <div class="small-6 columns">
                    <h1 class="text-center">MONSTER</h1>
                    <div class="healthbar">
                        <div class="healthbar text-center" style="background-color: green; margin: 0px; color: white;"
                            :style="{width:monsterHealth+'%'}">
                            {{monsterHealth}}

                        </div>
                    </div>
                </div>
            </section>
            <section class="row controls" v-if="!newGame">
                <div class="small-12 columns">
                    <span >
                        <button class="start-game" @click="newComponentCall()"> INSTRUCTIONS </button>
                        <button class="start-game" v-on:click="newGameOpen()">START NEW GAME</button>
                    </span>  
                </div>
            </section>
            <section class="row controls" v-if="newGame">
                <div class="small-12 columns">
                    <button id="attack" v-on:click="attack()">ATTACK</button>
                    <button id="special-attack" v-if="specialAttackActive>=3" v-on:click="specialattack()">SPECIAL ATTACK</button>
                    <button id="heal"  v-on:click="heal()">HEAL</button>
                    <button id="give-up" v-on:click="giveUp()">GIVE UP</button>
                </div>
            </section>
            <section class="row log" v-if="attacks.length!=0">
                <div class="small-12 columns">
                    <ul>
                        <li v-for="(attack,index) in attacks" :key="index" :class="{'monster-turn' : index%2==0, 'player-turn' : index%2!=0 }">    
                            {{ attack }}
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>

<script src='./BattleGround.js'></script>

<style scoped>
.main{
    margin: auto; 
    border: 3px solid #73AD21;
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
.text-center {
    text-align: center;
}

.healthbar {
    width: 90%;
    height: 40px;
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
}

.controls, .log {
    margin-top: 30px;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
}

.turn {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 22px;
}

.log ul {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
}

.log ul li {
    margin: 5px;
}

.log ul .player-turn {
    color: blue;
    background-color: #e4e8ff;
}

.log ul .monster-turn {
    color: red;
    background-color: #ffc0c1;
}

button {
    font-size: 20px;
    background-color: #eee;
    padding: 12px;
    box-shadow: 0 1px 1px black;
    margin: 10px;
}

.start-game {
    background-color: #aaffb0;
}

.start-game:hover {
    background-color: #76ff7e;
}

#attack {
    background-color: #ff7367;
}

#attack:hover {
    background-color: #ff3f43;
}

#special-attack {
    background-color: #ffaf4f;
}

#special-attack:hover {
    background-color: #ff9a2b;
}

#heal {
    background-color: #aaffb0;
}

#heal:hover {
    background-color: #76ff7e;
}

#give-up {
    background-color: #ffffff;
}

#give-up:hover {
    background-color: #c7c7c7;
}

.navigation {
    margin-top: 15px;
    font-size: 10px;
    padding: 5px;
    width: 10%;   
}
</style>