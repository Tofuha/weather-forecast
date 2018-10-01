import React from 'react';
import './WeatherCard.css';

class WeatherCard extends React.Component {

  getDayOfWeek = (date) => {
    var dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
  }

  render() {
    const hereWeather = this.props.weather[this.props.day];
    const arrayYa= [];

    for (let key in hereWeather) {
      arrayYa.push(hereWeather[key]);
    }


    return (
      <div className='card-layout'>
        <div className='day'>
          <p>{this.getDayOfWeek(arrayYa[3])}</p>
        </div>
        <div className='icon'>
          <img src={arrayYa[2]} alt=""/>
        </div>
        <div className='temperature'>
          {hereWeather && <p>{arrayYa[0]}° <span>{arrayYa[1]}°</span></p> }
        </div>
      </div>
    )
  }
}

export default WeatherCard;
