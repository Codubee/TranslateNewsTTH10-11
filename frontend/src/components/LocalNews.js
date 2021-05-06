import React from 'react';
import { Card } from "react-bootstrap";
import { Row, Col } from 'reactstrap';
import '../styles/LocalNews.css'
import axios from "axios";
class LocalNews extends React.Component {
    // Create an array of javascript objects
    constructor(props) {
        super(props);
        const LocalNews = [
            {
                "text": "",
                "url": ""
            },
        ]
        this.state = {LocalNews};
        console.log(this.state);
    }
    componentDidMount(){
        axios.get("/getLocalNews")
            .then((response) => {
                console.log(response);
                this.setState({
                    text: response.data.text,
                    url: response.data.url
                })
            })
    }

    render() {
        return (
            <div className="local-container">
                <h1>Local News</h1>
                <Row>
                    {
                        //map to display the articles in cards
                        this.state.LocalNews.map((article, id) => (
                            <div key={id}>
                                {
                                    < Col sm='6' md='4' key={id}>
                                        <Card onClick={() => {
                                            window.open(article.url)
                                        }} style={{ width: "280px" }} className="local-box"
                                        >
                                            <Card.Body>
                                                <Card.Title id="local-title-text">{article.text}</Card.Title>
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
}
export default LocalNews;