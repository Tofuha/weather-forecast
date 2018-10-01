import React, { Component } from 'react';
import WeatherCard from './components/WeatherCard';
import Form from './components/Form';
import './App.css';

class App extends Component {
  state = {
    weather: []
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const city = event.target.city.value;
    const cityReg = city.match(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/);

    if (cityReg && city) {
      fetch(`http://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=8`)
      .then(response => response.json())
      .then(data => {
        let weatherDate = data.forecast.forecastday.map((data) => {
          return (
            {
              "maxtemp": data.day.maxtemp_c,
              "mintemp": data.day.mintemp_c,
              "weathericon": data.day.condition.icon,
              "date": data.date
            }
          )
        })
        this.setState({
          weather: weatherDate
        })
        console.log(this.state.weather);
      })
    }

  }

  render() {
    return (
      <div className='container'>
        <h1>7 Days Weather Forecast</h1>
        <Form handleSubmit={this.handleSubmit}/>
        <div className="weather-container">
          <WeatherCard day={0} weather={this.state.weather} />
          <WeatherCard day={1} weather={this.state.weather} />
          <WeatherCard day={2} weather={this.state.weather} />
          <WeatherCard day={3} weather={this.state.weather} />
          <WeatherCard day={4} weather={this.state.weather} />
          <WeatherCard day={5} weather={this.state.weather} />
          <WeatherCard day={6} weather={this.state.weather} />
        </div>
      </div>
    );
  }
}

export default App;
