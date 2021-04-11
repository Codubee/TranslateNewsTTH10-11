import React from 'react';
import VaccineNews from '../components/VaccineNews'
import { Container } from 'reactstrap';
import LocalNews from '../components/LocalNews'

function NewsPage(){
    return(
        <Container>
            <LocalNews/>
            <VaccineNews/>
        </Container>

    )
}

export default NewsPage;