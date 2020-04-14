import React from 'react';
import Logo from './img/tyler-logo-square.png';
import './nav.css'
class Navbar extends React.Component{

    render(){
        return(
           <React.Fragment>
             
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top ">
<a href="#" class="navbar-brand">
	<img  class="tyler-logo" src={Logo} alt="Tyler sullivan branding logo"/>
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarResponsive">
<ul class="navbar-nav ml-auto">
<li class="nav-item">
	<a href="#home" class="nav-link">Home</a>
</li>
<li class="nav-item">
	<a href="#about" class="nav-link">About Me</a>
</li>
<li class="nav-item">
	<a href="#services" class="nav-link">Services</a>
</li>
<li class="nav-item">
	<a href="#experience" class="nav-link">Experience</a>
</li>

<li class="nav-item">
	<a href="#contact" class="nav-link">Contact</a>
</li>
</ul>
</div>
</nav>
               </React.Fragment>
        )
    }

}

export default Navbar;