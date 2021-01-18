import React from 'react'
import { connect } from 'react-redux';
import WeatherPage from './WeatherPage';

class WeatherPageContainer extends React.Component {
    render = () => {
        return <WeatherPage {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return{
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(WeatherPageContainer)