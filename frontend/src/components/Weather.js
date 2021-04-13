import React from 'react';
import { Card } from "react-bootstrap";
import { Row, Col } from 'reactstrap';

function Weather() {
    const Weather = [
        {
            "city":"Dallas",
            "temp":"66"
          },
    ]
    return (
        <div>
            <h1>Weather</h1>
            <Row>
                {
                    Weather.map((_objWeather, id) => (
                        <div key={id}>
                            {
                                < Col sm='6' md='4' key={id}>
                                    <Card style={{ width: "22rem" }} className="box">
                                        <p1>The weather in {_objWeather.city} is {_objWeather.temp}° Farehnheit </p1>
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