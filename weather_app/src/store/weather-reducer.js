import weatherAPI from "../api/api";


let initialState = {
    city: "ОМСК",
    temp: "266,2",
    press: "1000",
    humidity: "60",
    wind: {
        speed: "8",
        deg: "240"
    },
    weather:[{
        main: "Clear",
        description: "ясно"
    }]

}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DATA": {
            return {
                ...state,
                ...action.weatherData,
                wind:{
                    speed:action.weatherData.wind.speed,
                    deg:action.weatherData.wind.deg
                }

            }
        }
        default : {return state}
    }

}

export default weatherReducer;

const setInfoAC = (weatherData) => {
    return { type: "SET_DATA", weatherData}
}

export const getDataThunkCreator = (city) => (dispatch) => {
    weatherAPI.getWeather(city)
    .then((response) => {
        
        dispatch(setInfoAC({
            city: response.data.name,
            temp: response.data.main.temp,
            press: response.data.main.pressure,
            humidity: response.data.main.humidity,
            wind:{
                speed: response.data.wind.speed,
                deg: response.data.wind.deg
            },
            weather:[
                {
                    main:response.data.weather[0].main,
                    description: response.data.weather[0].description
                }
            ]

        }))
    })
    .catch( (error) =>  {return error})
} 