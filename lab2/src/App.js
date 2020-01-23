import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import SecondComponent from './components/SecondComponent';

class App extends React.Component{
  render(){

return(
<div>
<HomePage firstName="Tyler"/>
<SecondComponent adjective="cool" />
</div>
);

  }
}

export default App;
