import React from 'react';
import axios from 'axios';
import { Card } from "react-bootstrap";
import { Row, Col } from 'reactstrap';
import '../styles/NationalNews.css'
import Loading from './Loading';

class NationalNews extends React.Component {

    constructor(props) {
        super(props);
        this.state = { NationalNews: [], isLoading: true};
    }
    componentDidMount(){
        axios.get("/getNationalNews")
        .then((response) => {
            console.log(response);
            this.setState({
                NationalNews: response.data,
                isLoading: false
            })
        })
    }
    render(){
        if(this.state.isLoading){
            return(
                <div>
                    <h1>National News</h1>
                    <Loading/>
                </div>
            )
        }
        else{
            return(
                <div className="national-container">
                    <h1>National News</h1>
                     <Row>
                        {
                          this.state.NationalNews.map((article,id) => (
                                <div key={id}>
                                    {
                                        < Col sm='6' md='4' key={id}>
                                            <Card onClick={() => {
                                                window.open(article.url)
                                            }}
                                             style={{width: "280px"}} className="national-box"
                                            >
                                                <Card.Body>
                                                    <Card.Title id="national-title-text">{article.text}</Card.Title>
                                                </Card.Body> 
                                             </Card>
                                        </Col>
                                    }
                                 </div>
                            ))
                        }
                     </Row>
                </div>
            )
        }
    }
}
export default NationalNews; 