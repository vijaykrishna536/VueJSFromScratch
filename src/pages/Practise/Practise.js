
export default {
    name:'Practise',
    data () {
        return {
            userHealth:100,
            computerHealth:100,
            newGame: false,
            playerHit:0,
            monsterHit:0,
            winner:'',
            messagePlayerHit :"PLAYER HIT MONSTER BY ",
            messageMonsterHit : "MONSTER HIT PLAYER BY ",
            messagePlayerHeal : "PLAYER HEALS HIMSELF BY ",
            attacks: []
        }
    },
    methods : {
        checker () {
            if(this.computerHealth<=0 || this.userHealth<=0) {
                if(this.computerHealth<=0 && this.userHealth<=0) {
                    this.winner='draw'

                } else if (this.computerHealth<=0) {
                    this.winner='user'
                } else if (this.userHealth <= 0) {
                    this.winner='computer'
                }
                this.newGame = false;
                alert("Winner is " + this.winner)
                return false
            } else {
                return true
            }       
        },
         attack () {
            this.monsterHit = Math.floor(Math.random()*15);
            this.userHealth -= this.monsterHit;
            this.attacks.push(this.messageMonsterHit + this.monsterHit);
            this.playerHit = Math.floor(Math.random()*15);
            this.computerHealth -= this.playerHit;
            this.attacks.push(this.messagePlayerHit + this.playerHit);
            this.checker();   
        },
        heal () {
            this.monsterHit = Math.floor(Math.random()*10);
            this.userHealth -= this.monsterHit;
            this.attacks.push(this.messageMonsterHit + this.monsterHit);
            this.playerHit = Math.floor(Math.random()*20);
            this.userHealth += this.playerHit;
            if(this.userHealth>100) {
                this.userHealth=100
                this.attacks.push("PLAYER HEALS HIMSELF UPTO 100")
            } else {
                this.attacks.push(this.messagePlayerHeal + this.playerHit);
            }
            this.checker();
        },
        specialattack () {
            this.monsterHit = Math.floor(Math.random()*15);
            this.userHealth -= this.monsterHit;
            this.attacks.push(this.messageMonsterHit + this.monsterHit);
            this.playerHit = Math.floor(Math.random()*20);
            this.computerHealth -= this.playerHit;
            this.attacks.push(this.messagePlayerHit + this.playerHit);
            this.checker();
        },
        newGameOpen () {
            this.userHealth=100;
            this.computerHealth=100;
            this.newGame=true;
            this.attacks=[];
        },
        giveUp () {
            this.newGameOpen();
            this.newGame=false;
        }

    },
    computed () {
        
    }
}