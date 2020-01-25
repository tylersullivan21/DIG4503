import React from 'react';

class Content extends React.Component{

render(){
    return(
<div>
       <p>{this.props.para1}</p>

       <p>{this.props.para2}</p>
       <p>{this.props.para3}</p>

       </div>

    );
}

}

export default Content;