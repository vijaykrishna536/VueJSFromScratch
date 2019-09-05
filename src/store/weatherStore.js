import axios from 'axios'
const key="3b2b2f1a0c9964eb88ebf24e81b2d5bd"

export default {
    state : { 
        weatherReport: {},
        error:false
    },
    getters : {
        getWeatherReport (state) {
            return state.weatherReport
        },
        getError (state) {
            return state.error
        }
    },
    mutations : {
        setWeatherReport (state, value) {
            state.weatherReport = value
        },
        setError (state, value) {
            state.error = value
        }
    },
    actions : {
        GET_WEATHER_REPORT ({commit},payload) {
            axios
                .get("http://api.openweathermap.org/data/2.5/weather?q="+payload+"&appid="+key)
                .then( resp => {
                    if(resp.status==200) {
                        console.log(resp.data)
                        commit('setWeatherReport',resp.data)
                    } 
                        
                })
                .catch(err => { 
                    (console.log(err))
                    commit('setError',true)    
                })
        }
        
    }
}