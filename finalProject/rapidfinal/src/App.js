import React from 'react';
import './App.css';
import '../src/main.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
class HomePage extends React.Component{

  render(){
    return(
     
<React.Fragment>
<div id="home" class="offset">
<Navbar />
<Hero />
<About />
<Skills />
<Resume />
<Timeline />
<Footer/>
</div>

</React.Fragment>
    )
  }
}

export default HomePage;
