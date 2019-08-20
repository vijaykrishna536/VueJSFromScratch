
export default {
    name:"QuoteBox",
    props : ['quotes'],
    data () {
        return {
        }
    },
    methods : {
        removeQuote () {
            this.$emit('delete', this.quotes)
        }
    }
}