import React from 'react';
import VaccineNews from '../components/VaccineNews'
import { Container } from 'reactstrap';
import LocalNews from '../components/LocalNews'
import Weather from '../components/Weather'
import Languages from '../components/Languages';

function NewsPage(){
    return(
        <Container>
            <Languages/>
            <LocalNews/>
            <Weather/>
            <VaccineNews/>
        </Container>

    )
}

export default NewsPage;