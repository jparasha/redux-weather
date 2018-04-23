import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        //const temps = cityData.list.map(weather => weather.main.temp);
        const temps = cityData.list.map(weather => (weather.main.temp-273).toPrecision(2));
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const  { lon, lat } = cityData.city.coord; //es6
        //const lat = cityData.city.coord.lat;

        //console.log('temps', temps.map(celcius=>(temps)));
        console.log('temps', cityData.list.map(weather => (weather.main.temp-273).toPrecision(2)));
        return (
            <tr className="data-row" key={name}>
                <td><GoogleMap lon={lon} lat ={lat}/></td>
                <td>
                    <Chart data={temps} color={'orange'} units="&deg;C"/>
                </td>
                <td>
                    <Chart data={pressures} color={'green'} units="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color={'coral'} units= "%"/>
                </td>
            </tr>
        );
    }
    render() {
        if(this.props.weather.length<1){
            return (
                <div>
                    <h1> ENTER CITY NAME TO GET WEATHER FORECAST </h1>
                </div>
            );
        }
        return (
          
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th> City </th>
                        <th> Temperature (K)</th>
                        <th> Pressure (hPa)</th>
                        <th> Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)} 
                    {console.log('weather', this.props.weather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);