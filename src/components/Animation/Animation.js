export default {
    name:'Animation',
    data () {
        return {
            status:false,
        }
    },
    methods : {
        updateStatus () {
            this.status = !this.status;
        }
    },
    
}