import React from 'react';

class NameSearch extends React.Component{


nameSearch(){


    let namesearch = document.querySelector("namesearch");


fetch("http://localhost:80/shows/name/" + )
.then((res => {
    res.json();
})
.then((processed)=>{
let namereport = document.querySelector("#namereport");



})
)



}



render(){
return(

<div>
<input  id="namesearch" type="text" onKeyDown={}/>
<div id="namereport"></div>
</div>


);


}












}