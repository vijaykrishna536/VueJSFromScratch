export default {
    name:'BattleGroundInstruction',
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