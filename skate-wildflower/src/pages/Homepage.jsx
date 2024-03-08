
import React, {component} from 'react';
import bannerImg1 from '../Images/skateFlier.jpeg'
import Navbar from '../Components/Navbar';

function Homepage() {
return (
    <div>
        <h1>Skate Wildflower</h1>
        <Navbar />
        <img src={bannerImg1} alt="Skate Wildflower Banner" />
    </div>
);
}

export default Homepage;