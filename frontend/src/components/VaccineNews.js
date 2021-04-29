import React from 'react';
import { Card } from "react-bootstrap";
import { Row, Col } from 'reactstrap';
import '../styles/VaccineNews.css'

function VaccineNews() {
    // Create an array of javascript objects
    const VaccineNews = [
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
        <div className="vaccine-container">
            <h1>Vaccine News</h1>
            <Row>
                {
                    VaccineNews.map((objVaccine, id) => (
                        <div key={id}>
                            {//opens article link in a new tab when clicked on card
                                < Col sm='6' md='4' key={id}>
                                     <Card onClick={() => {
                                        window.open(objVaccine.url)
                                        }} style={{ width: "280px", height:"400px" }} className="vaccine-box"
                                    >
                                        <Card.Img className="vaccine-image" variant="top" src={objVaccine.image} />
                                        <Card.Body>
                                            <Card.Title id="vaccine-title-text">{objVaccine.title}</Card.Title>
                                            <Card.Subtitle id="vaccine-subtitle-text" tag="h6" className="mb-2 text-muted">{objVaccine.subtext}</Card.Subtitle>
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
export default VaccineNews; 