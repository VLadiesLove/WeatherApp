import React from 'react'
import { connect } from 'react-redux';
import WeatherPage from './WeatherPage';
import {getDataThunkCreator} from '../store/weather-reducer';

class WeatherPageContainer extends React.Component {
    render = () => {
        return <WeatherPage {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return{
        data: state.weatherPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeather: (city) => dispatch(getDataThunkCreator(city))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(WeatherPageContainer)