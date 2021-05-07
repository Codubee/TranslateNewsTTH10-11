import React from 'react';
import { Card } from "react-bootstrap";
import { Row, Col } from 'reactstrap';
import '../styles/LocalNews.css'
import axios from "axios";
import Loading from './Loading';
class LocalNews extends React.Component {
    // Create an array of javascript objects
    constructor(props) {
        super(props);
        this.state = { LocalNews: [], isLoading: true };
    }
    componentDidMount() {
        axios.get("/getLocalNews")
            .then((response) => {
                console.log(response);
                this.setState({
                    LocalNews: response.data,
                    isLoading: false
                })
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    <h1>Local News</h1>
                    <Loading />
                </div>
            )

        }
        else {
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
}
export default LocalNews;