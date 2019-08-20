import axios from 'axios'

export default{
    state : { 
        weatherReport: {}
    },
    getters : {
        getWeatherReport (state) {
            return state.weatherReport
        }
    },
    mutations : {
        setWeatherReport (state, value) {
            state.weatherReport = value
        }
    },
    actions : {
        GET_WEATHER_REPORT (payload) {
            axios
                .get("api.openweathermap.org/data/2.5/weather?q=",payload)
                .then( resp => {
                    if(resp.status==200)
                        commit('setWeatherReport',resp.body)
                })
                .catch(err=>(console.log(err)))
        }
        
    }
}