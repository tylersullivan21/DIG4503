import React from 'react';

movieSearch() {
let inputElement = document.querySelector("#movieInput");
fetch("http://localhost:80/movies/title" + inputElement.value);
.then((response) => {
  return response.json();})

}

class App extends React.Component {
  
  render(){
  return (
  <div>
<input type="text" id="movieInput" onKeyUp={this.movieSearch} />

  </div>
  );
  }

}

export default App;
