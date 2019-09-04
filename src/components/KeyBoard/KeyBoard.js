export default ({
    name:'KeyBoard',
    data () {
        return{
            eventsList: {
                key: '',
                code: ''
            }

        }
    },
    methods : {
        called (event) {
            console.log(event)

        }
    }
})