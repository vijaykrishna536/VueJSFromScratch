import {mapActions, mapGetters} from 'vuex'

export default {
    name:'WeatherApp',
    data () {
        return {
            isCity:false,
            city:'',
            location : {
                latitude:0,
                longitude:0
            },
            cities:['Patna','Gaya','London','Mumbai','Bangalore']
            
        }
    },
    methods : {
        ...mapActions ({
            GET_WEATHER_REPORT: "GET_WEATHER_REPORT"
        }),
        fetchDetails () {
            this.location.latitude=12.9716,
            this.location.longitude=77.5946,
            this.isCity=true;
            this.$store.dispatch('GET_WEATHER_REPORT',this.city)
        },
        clean () {
            this.isCity=false,
            this.city=''
        },
        extractTemprature (value) {
            return ((value-273.15));
        },
        extractTime (value) {
            return new Date(value).toTimeString();
        },
        extractPressure (value) {
            return value*0.001;
        }

    },
    created () {
    },
    computed : {
        ...mapGetters ({
            weather : 'getWeatherReport',
            error : 'getError'

        })
        
    },
}