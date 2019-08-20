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


export default {
    name: 'Start',
    data () {
        return {
            selectedComponent:'',
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
        QuizInstruction:QuizInstruction
    },
    methods : {
        getRidOfComponents () {
            this.selectedComponent=''
        }
    },
    watch : {
        
    }
}  