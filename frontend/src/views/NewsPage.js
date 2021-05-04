import React from 'react';
import VaccineNews from '../components/VaccineNews'
import { Container } from 'reactstrap';
import LocalNews from '../components/LocalNews'
import Weather from '../components/Weather'
import Languages from '../components/Languages';
import NationalNews from '../components/NationalNews';

function NewsPage(){
    return(
        <Container>
            <Languages/>
            <Weather/>
            <LocalNews/>
            <NationalNews/>
            <VaccineNews/>
        </Container>

    )
}

export default NewsPage;