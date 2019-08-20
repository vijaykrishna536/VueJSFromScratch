import QuizQuestion from "@/components/QuizQuestion"
import QuizSolution from "@/components/QuizSolution"

export default {
    name:'QuizPage',
    data () {
        return {
            quizStart:false,
            currentComponent:'',
            nothing:'',
            quizInstruction:"QuizInstruction"
        }
    },
    methods : {
        newGame () {
            this.quizStart=true;
            this.currentComponent="QuizQuestion";

        },
        restart () {
            this.quizStart=false;
        },
        quit () {
            this.$emit('newComponent',this.nothing)
        },
        instruction () {
            this.$emit('newComponent',this.quizInstruction);
        }

    },
    components : {
        QuizQuestion:QuizQuestion,
        QuizSolution:QuizSolution,
    }

    
}