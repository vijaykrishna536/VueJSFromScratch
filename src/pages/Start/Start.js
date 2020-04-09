import Animation from '@/components/Animation'
import BattleGround from '@/components/BattleGround'
import BattleGroundInstruction from '@/components/BattleGroundInstruction'
import GitHub from '@/components/GitHub'
import LoanCalculator from '@/components/LoanCalculator'
import NumberGuessing from '@/components/NumberGuessing'
import Quotes from '@/components/Quotes'
import Todo from '@/components/Todo'
import UserList from '@/components/UserList'
import WeatherApp from '@/components/WeatherApp'
import Quiz from '@/components/QuizPage'
import QuizInstruction from '@/components/QuizInstruction'
import Others from '@/components/Others'
import Seoul from '@/components/Seoul'
import API from '@/components/API'
import CSS from '@/components/CSS'
import KeyBoard from '@/components/KeyBoard'

export default {
    name: 'Start',
    data () {
        return {
            selectedComponent:'',
            blur:0,
            isBackdrop:false
        }
    },
    watch: {
        '$route.params.component': {
            handler: function(component) {
               console.log(component)
               this.selectedComponent= component;
            },
            deep: true,
            immediate: true
        }
    },
    components :{
        BattleGround: BattleGround,
        GitHub:GitHub,
        LoanCalculator:LoanCalculator,
        NumberGuessing:NumberGuessing,
        Todo:Todo,
        UserList:UserList,
        WeatherApp:WeatherApp,
        BattleGroundInstruction:BattleGroundInstruction,
        Quotes:Quotes,
        Animation:Animation,
        Quiz:Quiz,
        QuizInstruction:QuizInstruction,
        Others:Others,
        Seoul:Seoul,
        API:API,
        CSS:CSS,
        KeyBoard:KeyBoard,
    },
    methods : {
        getRidOfComponents () {
            this.selectedComponent=''
        },
        setSelectedComponent(name) {
            this.$router.push({name:'Start',params:{component:name}})
        }
    }
}  