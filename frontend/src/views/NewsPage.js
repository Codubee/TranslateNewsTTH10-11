import React from 'react';
import VaccineNews from '../components/VaccineNews'
import { Container,Button } from 'reactstrap';
import LocalNews from '../components/LocalNews'
import Weather from '../components/Weather'
import Languages from '../components/Languages';

class NewsPage extends React.Component {

    constructor(props){
        super(props)
        this.changeLanguage = this.changeLanguage.bind(this)
    }
    changeLanguage(){
        //API call to translate the news goes here
        var language = localStorage.getItem('language')
        console.log(language)
    }

    render() {
        return (
            <Container>
                <Languages />
                <Button onClick={this.changeLanguage}>Submit</Button>
                <Weather />
                <LocalNews />
                <VaccineNews />
            </Container>

        )
    }
}

export default NewsPage;