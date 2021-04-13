import React from 'react';
import VaccineNews from '../components/VaccineNews'
import { Container } from 'reactstrap';
import LocalNews from '../components/LocalNews'
import Languages from '../components/Languages';

function NewsPage(){
    return(
        <Container>
            <Languages/>
            <LocalNews/>
            <VaccineNews/>
        </Container>

    )
}

export default NewsPage;