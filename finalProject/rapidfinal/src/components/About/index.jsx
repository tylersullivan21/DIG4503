import React from 'react';
import Headshot from '../../img/headshot-square.jpg';
import './about.css';
class About extends React.Component{


render(){
    return(


	
<div id="about" class="offset">
	<div class=" d-flex justify-content-center align-items-flex-start">
		<h2 class="heading text-center">About Myself</h2>
		
	</div>
	<div class="about-underline"></div>
	
	<div class="about-content-container">
		
<img class="headshot me" src={Headshot} alt="Headshot of myself"/>
	
<p class="me-text">Hi there I'm Tyler! I am a Senior Web Design Student at the University of Central Florida and will be graduating with my Bachelor's Degree in the Fall of 2020. My primary area of interest is Front End Web Design and Development. Scroll down to see some of the services that I offer you and some of my talents that might fit what you are looking for!

</p>
	
	</div>
    </div>

    )
}

}

export default About;