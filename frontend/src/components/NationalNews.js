import React from 'react';
import { Card } from "react-bootstrap";
import { Row, Col } from 'reactstrap';
import '../styles/NationalNews.css'

function NationalNews() {
    // Create an array of javascript objects
    const NationalNews = [
        {
            "image": "https://lh3.googleusercontent.com/pw/ACtC-3d3ip9JeN5zEn_sjeFCOVBvy3Xg0Ys9sRsmAU6-kMj3faiekxvUoyrORlkTrsk_jCTgLFFRkd3PGavF5rdsdUnNAV8iMJio2p4vz0XUBx5MOdvWaDbiLa4CvjG_NIxfQZpGmRlON3RT7B7TRDNqfrTzFg=w1420-h710-no?authuser=0",
            "title": "Medical News Today",
            "subtext": "COVID-19 Vaccines: Live Updates",
            "url": "https://www.medicalnewstoday.com/articles/covid-19-vaccine-live-updates#1"
        },
        {
            "image": "https://lh3.googleusercontent.com/pw/ACtC-3cpdwvlI3sk3xL0pzSaKXWEWnlKjD28QnUdSsLKnVEiWFPv2w8nB2Nh-YlKofgY76_o_vzcK7LNmTHqJZbIObcyuNmHDM-oeSswH8TaHthkVhSmKoPZFuj4hcT2CfLdXAchLWHps0srwkeUwEvXwvN3uw=w2000-h727-no?authuser=0",
            "title": "Worldometer",
            "subtext": "Live Updates on Coronavirus Cases, Deaths, and Recovered ",
            "url": "https://www.worldometers.info/coronavirus/"
        },
    ]
    return (
        <div className="national-container">
            <h1>National News</h1>
            <Row>
                {
                    NationalNews.map((objNationalNews, id) => (
                        <div key={id}>
                            {//opens article link in a new tab when clicked on card
                                < Col sm='6' md='4' key={id}>
                                     <Card onClick={() => {
                                        window.open(objNationalNews.url)
                                        }} style={{ width: "280px", height:"400px" }} className="national-box"
                                    >
                                        <Card.Img className="national-image" variant="top" src={objNationalNews.image} />
                                        <Card.Body>
                                            <Card.Title id="national-title-text">{objNationalNews.title}</Card.Title>
                                            <Card.Subtitle id="national-subtitle-text" tag="h6" className="mb-2 text-muted">{objNationalNews.subtext}</Card.Subtitle>
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
export default NationalNews; 