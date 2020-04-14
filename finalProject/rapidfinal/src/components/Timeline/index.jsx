import React from 'react';

import './timeline.css';
class Timeline extends React.Component{


render(){
    return(

        <React.Fragment>

<div id="experience" class="offset ">

	<div class="col-12">
		<h2 class="heading text-center">Where Have I Been?</h2>
		<div class="heading-underline"></div>
	</div>


	  

	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css' />
  

	<section class="timeline">
		<ul>
		  <li>
			<div>
			 <h5><strong>Univeristy of Central Florida</strong></h5>
			 <p>(2016-Present)</p>
			 <p>Digital Media: Web Design Track</p>
			 <p>Estimated Graduation Date: <strong>Fall 2020</strong></p>
			</div>
		  </li>
		  <li>
			<div>
				<h5><strong>Alachua County BOCC Internship</strong></h5>
				<p>(2018-Present)</p>
				<p>Role: <strong>Junior Web Developer Intern</strong></p>

				
			</div>
		  </li>
		  <li>
			<div>
				<h5><strong>Univeristy of Central Florida Video Production Internship</strong></h5>
				<p>(Jan 2018-Apr 2018)</p>
				<p>Role: <strong>Video Production Intern</strong></p>
				
			</div>
		  </li>
		
		</ul>
	  </section>
	


</div>




        </React.Fragment>
    )
}

}




export default Timeline;