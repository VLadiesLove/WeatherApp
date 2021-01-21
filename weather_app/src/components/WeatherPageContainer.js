import React from 'react'
import { connect } from 'react-redux';
import WeatherPage from './WeatherPage';
import {getDataThunkCreator} from '../store/weather-reducer';

class WeatherPageContainer extends React.Component {
    render = () => {
        return <WeatherPage {...this.props} 
                            editMode={this.state.editMode}
                            toggleEditMode={this.toggleEditMode}
                            changeCity={this.changeCity}
                            city={this.state.city}
                            changeDeg={this.changeDeg}
                            deg={this.state.deg}/>
    }

    state = {
        editMode: false,
        city:this.props.data.city,
        deg:true,
        flag:false
    }

    toggleEditMode = () => {
        this.setState ({
            editMode: !this.state.editMode
        })
        if(this.state.editMode){
            this.props.getWeather(this.state.city)
        }

    }

    changeCity = (e) => {
        this.setState({
            city: e.currentTarget.value
        })
    }

    changeDeg = () => {
        if (this.state.flag){ 
            this.setState({flag:false});
            return;
        }
        this.setState({
            deg: !this.state.deg,
            flag: !this.state.flag

        })
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