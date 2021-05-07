import React from 'react';
import { Card } from "react-bootstrap";
import { Row, Col } from 'reactstrap';
import '../styles/LocalNews.css'

function LocalNews() {
    // Create an array of javascript objects
    const LocalNews = [
        {
           "image": "https://lh3.googleusercontent.com/pw/ACtC-3d3ip9JeN5zEn_sjeFCOVBvy3Xg0Ys9sRsmAU6-kMj3faiekxvUoyrORlkTrsk_jCTgLFFRkd3PGavF5rdsdUnNAV8iMJio2p4vz0XUBx5MOdvWaDbiLa4CvjG_NIxfQZpGmRlON3RT7B7TRDNqfrTzFg=w1420-h710-no?authuser=0",
            "title": "Medical News Today",
            "subtext": "COVID-19 Vaccines: Live Updates",
            "url": "https://www.medicalnewstoday.com/articles/covid-19-vaccine-live-updates#1"
        },
        {
            "image": "https://lh3.googleusercontent.com/pw/ACtC-3cpdwvlI3sk3xL0pzSaKXWEWnlKjD28QnUdSsLKnVEiWFPv2w8nB2Nh-YlKofgY76_o_vzcK7LNmTHqJZbIObcyuNmHDM-oeSswH8TaHthkVhSmKoPZFuj4hcT2CfLdXAchLWHps0srwkeUwEvXwvN3uw=w2000-h727-no?authuser=0",
            "title": "Worldometer",
            "subtext": "Live Updates on Coronavirus Cases, Deaths, and Recovered",
            "url": "https://www.worldometers.info/coronavirus/"
        },
    ]
    return (

        <div className="local-container">
            <h1>Local News</h1>
            <Row>
                {
                    //map to display the articles in cards
                    LocalNews.map((objLocalNews, id) => (
                        <div key={id}>
                            {
                                < Col sm='6' md='4' key={id}>
                                    <Card onClick={() => {
                                        window.open(objLocalNews.url)
                                        }} style={{ width: "280px" }} className="local-box"
                                    >
                                        <Card.Img className="local-image" variant="top" src={objLocalNews.image} />
                                        <Card.Body>
                                            <Card.Title id="local-title-text">{objLocalNews.title}</Card.Title>
                                            <Card.Subtitle id="local-subtitle-text" tag="h6" className="text-muted">{objLocalNews.subtext}</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </Col>}
                        </div>
                    ))
                }
            </Row>
        </div>
    )
}
export default LocalNews;