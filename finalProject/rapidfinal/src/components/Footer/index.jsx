import React from 'react';
import './footer.css';
import Logo from '../Navbar/img/tyler-logo-square.png';
class Footer extends React.Component{


    render(){
        return(

<React.Fragment>
<div id="contact" class="offset">

	<footer >
		<div class="row justify-content-center">
			<div class="col-md-5 text-center">
				<a href="index.html"><img class="footer-logo" src={Logo} alt=""/> </a>
				<p class="footer-text">Connect with me to learn more about my services and skills that I have to offer you to help you get what need done!</p>
				<strong></strong>
				<p class="contact-info">sullivan.tyler2198@gmail.com <br/> (XXX)-XXX-XXXX </p>
				
			<a href="https://twitter.com/tylersullivan21" target="_blank"><i class="fab fa-twitter"></i></a>
			<a href="https://instagram.com/tylersullivan21" target="_blank"><i class="fab fa-instagram"></i></a>
			<a href="https://github.com/tylersullivan21" target="_blank"><i class="fab fa-github"></i></a>
			<a href="https://www.linkedin.com/in/tyler-sullivan-2b93761a0/" target="_blank"><i class="fab fa-linkedin"></i></a>
			</div>
		</div>
	</footer>

</div>

</React.Fragment>

        )
    }
}

export default Footer;