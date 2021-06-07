import React from 'react';
import { Card } from "react-bootstrap";
import { Row, Col } from 'reactstrap';
import '../styles/VaccineNews.css'
import axios from "axios";
import Loading from './Loading';

class VaccineNews extends React.Component {
    // Create an array of javascript objects
    constructor(props) {
        super(props);
        this.state = { VaccineNews: [], isLoading: true };
    }
    componentDidMount() {
        axios.get("/getVaccineNews")
            .then((response) => {
                console.log(response);
                this.setState({
                    VaccineNews: response.data,
                    isLoading: false
                })
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    <h1>Vaccine News</h1>
                    <Loading />
                </div>
            )

        }
        else {
            return (
                <div className="vaccine-container">
                    <h1>Vaccine News</h1>
                    <Row>
                        {
                            //map to display the articles in cards
                            this.state.VaccineNews.map((article, id) => (
                                <div key={id}>
                                    {
                                        < Col sm='6' md='4' key={id}>
                                            <Card onClick={() => {
                                                window.open(article.url)
                                            }} style={{ width: "280px" }} className="vaccine-box"
                                            >
                                                <Card.Body>
                                                    <Card.Title id="vaccine-title-text">{article.text}</Card.Title>
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
export default VaccineNews;