export default {
    name:'QuizInstruction',
    data () {
        return {
            componentName:''
        }
    },
    methods : {
        loadNewComponent (component) {
            this.componentName = component;
            this.$emit('newComponent',this.componentName)
        }
    }
}