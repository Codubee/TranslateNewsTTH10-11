import React from 'react';
import { Container } from 'reactstrap';
import Explanation from '../components/Explanation';
import Features from '../components/Features'
import Team from '../components/Team'
import Tools from '../components/Tools'

function LandingPage(){
    return(
        <Container>
            <Explanation/>
            <Features/>
            <Team/>
            <Tools/>
        </Container>
    )
}

export default LandingPage;