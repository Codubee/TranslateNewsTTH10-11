import React from 'react';
import { Card } from "react-bootstrap";
import { Row, Col } from 'reactstrap';
import '../styles/LocalNews.css'

function LocalNews() {
    // Create an array of javascript objects
    const LocalNews = [
        {
            "image": "https://media.kvue.com/assets/KVUE/images/7ab62ba4-8577-440f-b5c8-885ecf8a1448/7ab62ba4-8577-440f-b5c8-885ecf8a1448_750x422.jpg",
            "url": "https://www.kxan.com/wp-content/uploads/sites/40/2021/04/20210404_212507.jpg?w=876&h=493&crop=1",
            "subtext": "At least two people were shot and one person was reportedly stabbed near an east Austin park Sunday night, the Austin Police Department says.",
            "title": "https://www.kvue.com/article/news/local/homeless/austin-heal-initiative-blueprint/269-87e567c1-db50-403b-b186-6875eb752cb2",
        },
        {
            "image": "https://www.kxan.com/wp-content/uploads/sites/40/2021/04/20210404_212507.jpg?w=876&h=493&crop=1",
            "title": "Austin's homeless strategy officer reveals blueprint for addressing homeless camps",
            "subtext": "The HEAL Initiative aims to remove those experiencing homelessness from four high-traffic areas in Austin and connect them with housing and ...",
            "url": "https://www.kvue.com/article/news/local/homeless/austin-heal-initiative-blueprint/269-87e567c1-db50-403b-b186-6875eb752cb2",
        },
        {
            "image": "https://media.kvue.com/assets/KVUE/images/7ab62ba4-8577-440f-b5c8-885ecf8a1448/7ab62ba4-8577-440f-b5c8-885ecf8a1448_750x422.jpg",
            "url": "https://www.kxan.com/wp-content/uploads/sites/40/2021/04/20210404_212507.jpg?w=876&h=493&crop=1",
            "subtext": "At least two people were shot and one person was reportedly stabbed near an east Austin park Sunday night, the Austin Police Department says.",
            "title": "https://www.kvue.com/article/news/local/homeless/austin-heal-initiative-blueprint/269-87e567c1-db50-403b-b186-6875eb752cb2",
        },
        {
            "image": "https://www.kxan.com/wp-content/uploads/sites/40/2021/04/20210404_212507.jpg?w=876&h=493&crop=1",
            "title": "Austin's homeless strategy officer reveals blueprint for addressing homeless camps",
            "subtext": "At least two people were shot and one person was reportedly stabbed near an east Austin park Sunday night, the Austin Police Department says.",
            "url": "https://www.kxan.com/news/local/austin/at-least-2-injured-in-reported-shooting-near-east-austin-park/",
        },
        {
            "image": "https://media.kvue.com/assets/KVUE/images/7ab62ba4-8577-440f-b5c8-885ecf8a1448/7ab62ba4-8577-440f-b5c8-885ecf8a1448_750x422.jpg",
            "url": "https://www.kxan.com/wp-content/uploads/sites/40/2021/04/20210404_212507.jpg?w=876&h=493&crop=1",
            "subtext": "The HEAL Initiative aims to remove those experiencing homelessness from four high-traffic areas in Austin and connect them with housing and ...",
            "title": "https://www.kxan.com/news/local/austin/at-least-2-injured-in-reported-shooting-near-east-austin-park/",
        },
        {
            "image": "https://www.kxan.com/wp-content/uploads/sites/40/2021/04/20210404_212507.jpg?w=876&h=493&crop=1",
            "title": "Austin's homeless strategy officer reveals blueprint for addressing homeless camps",
            "subtext": "The HEAL Initiative aims to remove those experiencing homelessness from four high-traffic areas in Austin and connect them with housing and ...",
            "url": "https://www.kxan.com/news/local/austin/at-least-2-injured-in-reported-shooting-near-east-austin-park/",
        },
    ]
    return (

        <div className="container">
            <Row>
                {
                    LocalNews.map((objLocalNews, id) => (
                        <div>
                            {
                                < Col sm='6' md='4' key={id}>
                                    <Card style={{ width: "280px" }} className="box">
                                        <Card.Img className="images" variant="top" src={objLocalNews.image} />
                                        <Card.Body>
                                            <Card.Title>{objLocalNews.title}</Card.Title>
                                            <Card.Subtitle tag="h6" className="mb-2 text-muted">{objLocalNews.subtext}</Card.Subtitle>
                                            <Card.Link>{objLocalNews.url}</Card.Link>
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