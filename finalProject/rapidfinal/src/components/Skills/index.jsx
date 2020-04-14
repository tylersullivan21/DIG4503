import React from 'react';
import './skills.css';
class Skills extends React.Component{


    render(){
        return(

            <React.Fragment>

<div id="services" class="offset">
	<div class="jumbotron">
		<div class="narrow">
			<div class="col-12">
				<h2 class="heading text-center">What Can I Do?</h2>
				<div class="heading-underline"></div>
			</div>

			<div class="row  skills-section text-center">
				<div class="col-md-4">
					<div class="feature left">
						<i class="fas fa-pencil-ruler fa-4x" data-fa-transform="shrink-4.5 up-4.5"></i>
						<h3 class="services-head">Web Design</h3>
						<p class="services-text">Want a greater internet presence but don't quite know how to get it? Just ask me, I have experience with design tools such as Adobe Creative Cloud Apps so I can help you find what you want! </p>
					</div>
				</div>

				<div class="col-md-4">
					<div class="feature center">
						<i class="fas fa-code fa-4x" data-fa-transform="shrink-4.5 up-4.5"></i>
						<h3 class="services-head">Web Development</h3>
						<p class="services-text">Already have an idea laid out and need someone to build it for you? Sweet, I can handle that for you! I have experience using tools such as HTML5, CSS3, Javascript and React.js to help you get your project built.</p>
					</div>
				</div>

				<div class="col-md-4">
					<div class="feature right">
						<i class="fas fa-camera-retro fa-4x" data-fa-transform="shrink-4.5 up-4.5"></i>
						<h3 class="services-head">Photography</h3>
						<p class="services-text">Need a portrait taken of you or a family portrait? Look no further! I usually have an eye for landscape photography but I also have the skills with a camera to get the right shot for you that you need!</p>
					</div>
	
				</div>

			</div>
			
			</div>
		</div>
		
	
	</div>


                </React.Fragment>

        )
    }
}



export default Skills;