import Posts from "@/components/Posts"

export default {
    name:'API',
    data () {
        return {
            SelectedAPI:'',
            APIList : ['Posts', 'Photos', 'Albums', 'Comments'],

        }
    },
    component : {
        Posts :Posts,
    },
    methods : {
        
    }
}