import React from 'react';
import ResumePDF from '../../img/tyler-resume-revised.pdf';
import './resume.css';
class Resume extends React.Component{


render(){


return(


<div class="jumbotron resume-section">
		<div class="narrow">
			<div class="resume-container">
<h3 class="resume-text">Click the button below to view my resume!</h3>


<a class="resume-btn" target="_blank"href={ResumePDF}>Download PDF</a>
			</div>

		</div>
	</div>


)


}

}

export default Resume;