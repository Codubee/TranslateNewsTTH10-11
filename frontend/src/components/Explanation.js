import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../styles/Explanation.css'
//Welcomes users and gives brief introduction of website. 
function Explanation(){
 return(
    <Jumbotron fluid>
        <Container id="explanation-container">
        <center>
        <h1 class="display-4">Welcome to Translate News!</h1>
        <p class="lead">Here you can get the latest emergency news coverage in a matter of seconds in any language.</p>
        </center>
        </Container>
    </Jumbotron>
 )
};

export default Explanation;
