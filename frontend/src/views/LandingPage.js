import React from 'react';
import { Container } from 'reactstrap';
import Explanation from '../components/Explanation';
import Features from '../components/Features'
import Team from '../components/Team'
import Tools from '../components/Tools'

function LandingPage() {
    return (
        <div>
            <Container>
                <Explanation />
                <Features />
                <Team />
            </Container>
            <Tools />
        </div>
    )
}

export default LandingPage;