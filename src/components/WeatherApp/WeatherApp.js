import {mapActions, mapGetters} from 'vuex'

export default{
    name:'WeatherApp',
    data () {
        return {
            isCity:true,
            error:true,
            city:'',
            weather:{

            }
        }
    },
    methods : {
        fetchDetails () {
            
        },
        clean () {
            this.isCity=false,
            this.error=false,
            this.city=''
        }
        

    },
    created () {
        GET_WEATHER_REPORT(city)
    },
    computed :{
        ...mapGetters ({
            getWeatherReport : 'getWeatherReport'

        })
        
    },
}