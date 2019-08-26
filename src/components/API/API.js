import {mapGetters, mapActions} from 'vuex'

export default {
    name:'API',
    data () {
        return {
            componentAPI:'',
            selectedAPI:'',
            APIList :['Posts', 'Photoes', 'Albums', 'Comments'],

        }
    },
    methods : {
        ...mapActions ({

        }),
        update () {
            this.componentAPI = this.selectedAPI;
        }
    },
    computed : {
        ...mapActions ({

        })
    }
}