import QuoteBox from "@/components/QuoteBox"

export default {
    name:'Quotes',
    components : {
        QuoteBox:QuoteBox
    },
    data () {
        return {
            numberOfQuotes :1,
            quoteList : ['Fashion is about feeling comfortable in your own skin'],
            quote:'',
            noQuote:false,
            maxQuotes:10
        }
        
    },
    methods : {
        addQuotes () {
            if(this.quote=='') {
                this.noQuote=true;
            } else if (this.numberOfQuotes<this.maxQuotes) {
                console.log("It is running")
                console.log(this.quote)
                this.quoteList.push(this.quote);
                this.numberOfQuotes++;
                this.clear();
            } else {
                alert("Out of Bound")
            }     
        },
        remove (event) {
            this.quoteList.splice(this.quoteList.indexOf(event),1);
            this.numberOfQuotes--;
        },
        clear () {
            this.quote=''
        },
        disable () {
            this.noQuote=false;
        }
    }
}