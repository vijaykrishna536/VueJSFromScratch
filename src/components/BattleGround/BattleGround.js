
export default {
    name:'BattleGround',
    data () {
        return {
            playerHealth:100,
            monsterHealth:100,
            newGame: false,
            playerHit:0,
            monsterHit:0,
            winner:'',
            minDamageMonster:5,
            minDamagePlayer:4,
            minHealPlayer:7,
            messagePlayerHit :"PLAYER HIT MONSTER BY ",
            messageMonsterHit : "MONSTER HIT PLAYER BY ",
            messagePlayerHeal : "PLAYER HEALS HIMSELF BY ",
            specialAttackActive : 0,
            attacks: [],
            componentName:"BattleGroundInstruction"
        }
    },
    methods : {
        checker () {
            if(this.monsterHealth<=0 || this.playerHealth<=0) {
                if(this.monsterHealth<=0 && this.playerHealth<=0) {
                    this.winner='draw'

                } else if (this.monsterHealth<=0) {
                    this.winner='user'
                } else if (this.playerHealth <= 0) {
                    this.winner='computer'
                }
                this.newGame = false;
                if(this.winner=='draw'){
                    alert("That's a draw")
                } else {
                    alert("Winner is " + this.winner)
                }
                
                return false
            } else {
                return true
            }       
        },
         attack () {
            this.monsterHit = this.attackHit(this.minDamageMonster);
            this.playerHealth -= this.monsterHit;
            this.playerHit = this.attackHit(this.minDamagePlayer);
            this.monsterHealth -= this.playerHit;
            this.addLog(this.messageMonsterHit + this.monsterHit,this.messagePlayerHit + this.playerHit);
            this.specialAttackActive ++;
            this.checker();   
        },
        heal () {
            this.monsterHit = this.attackHit(this.minDamageMonster);
            this.playerHealth -= this.monsterHit;
            this.playerHit = this.attackHit(this.minHealPlayer);
            this.playerHealth += this.playerHit;
            if(this.playerHealth>100) {
                this.playerHealth=100
                this.addLog(this.messageMonsterHit + this.monsterHit,"PLAYER HEALS HIMSELF UPTO 100");
            } else {
                this.addLog(this.messageMonsterHit + this.monsterHit,this.messagePlayerHeal + this.playerHit);
            }
            this.checker();
        },
        specialattack () {
            this.monsterHit = this.attackHit(this.minDamageMonster);
            this.playerHealth -= this.monsterHit;
            this.playerHit = this.attackHit(this.minDamagePlayer);
            this.monsterHealth -= this.playerHit;
            this.addLog(this.messageMonsterHit + this.monsterHit,this.messagePlayerHit + this.playerHit);
            this.specialAttackActive = 0;
            this.checker();
        },
        newGameOpen () {
            this.playerHealth=100;
            this.monsterHealth=100;
            this.specialAttackActive=0;
            this.newGame=true;
            this.attacks=[];
        },
        attackHit (base) {
            return Math.max(Math.floor(Math.random()*15),base);
        },
        giveUp () {
            this.newGame=false;
        },
        addLog (messageOne,messageTwo) {
            this.attacks.push(messageOne);
            this.attacks.push(messageTwo);
        },
        newComponentCall () {
            this.$emit('newComponent',this.componentName);
        }
    }
}