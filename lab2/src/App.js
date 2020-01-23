import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';

class App extends React.Component{
  render(){

return(
<div>
<HomePage firstName="Tyler"/>
<SecondComponent tagline1="themselves" />
<ThirdComponent tagline2="components" />
</div>
);

  }
}

export default App;
