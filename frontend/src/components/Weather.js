import React from 'react';
import { Card } from "react-bootstrap";
import { Row, Col } from 'reactstrap';
import '../styles/Weather.css';

function Weather() {
    const Weather = [
        {
            "city":"Dallas",
            "temp":"66"
          },
    ]
    return (
        <div className="weather-div">
            <h1>Weather</h1>
            <Row>
                {
                    Weather.map((_objWeather, id) => (
                        <div id ="weather-card" key={id}>
                            {
                                < Col sm='6' md='4' key={id}>
                                    <Card style={{ width: "22rem" }} className="weather-box">
                                        <img id="image" alt="" src="https://images.vexels.com/media/users/3/205087/isolated/preview/a41d84a485d960a7d929fd95ece1acf1-weather-stroke-icon-by-vexels.png"></img>
                                        <h6 id="weather-h6"> {_objWeather.city}</h6>
                                        <h1 id="weather-h1">{_objWeather.temp}°<span id="weather-p6">F</span></h1>
                                        <p id="weather-p1" >The weather in {_objWeather.city} is {_objWeather.temp}° Farehnheit </p>
                                    </Card>
                                </Col>}
                        </div>
                    ))
                }
            </Row>
        </div>
    )
}
export default Weather; 