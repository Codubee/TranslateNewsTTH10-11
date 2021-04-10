import React from 'react';
import { Card } from "react-bootstrap";
import { Row, Col } from 'reactstrap';
import '../styles/LocalNews.css'

function LocalNews() {
    // Create an array of javascript objects
    const LocalNews = [
        {
            "image": "image url",
            "title": "news title",
            "subtext": "some subtext",
            "url": "news article url"
        },
        {
            "image": "image url",
            "title": "news title",
            "subtext": "some subtext",
            "url": "news article url"
        },
    ]
    return (

        <div className="container">
            <Row>
                {
                    //map to display the articles in cards
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