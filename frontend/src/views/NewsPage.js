import React from 'react';
import VaccineNews from '../components/VaccineNews'
import { Container } from 'reactstrap';
import LocalNews from '../components/LocalNews'
import Weather from '../components/Weather'

function NewsPage(){
    return(
        <Container>
            <LocalNews/>
            <Weather/>
            <VaccineNews/>
        </Container>

    )
}

export default NewsPage;