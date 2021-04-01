import React from 'react';
import Explanation from '../components/Explanation';
import MyNavBar from '../components/Navbar';
import Team from '../components/Team'

function LandingPage(){
    return(
        <div>
            <Explanation/>
            <Team/>
        </div>
    )
}

export default LandingPage;