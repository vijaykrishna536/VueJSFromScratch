export default{
    name:'GitHub',
    data () {
        return {
            user:'',
            error:true,
            isUser:true

        }
    },
    methods : {
        fetchDetails() {

        },
        clean () {
            this.user='';
            this.error=false;
            this.isUser=false;
        }

    }
}