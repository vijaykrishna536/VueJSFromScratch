export default {
    name:'Others',
    data () {
        return {
            delta:0,
            leftprop: 50,
            clientX:0,
            skew:0
        }
    },
    methods : {
        animate (event) {
            this.delta = (event.clientX-window.innerWidth/2)*0.5;
            this.clientX = event.clientX;
            this.leftprop =this.clientX + this.delta;
            this.skew = this.leftprop + 1000;
            console.log(event.clientX, event.clientY, this.leftprop)
        }
    },

}