import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Application extends Component{
  constructor() {
    super();
  }

  render(){
    return (<div>React app, and node server</div>);
  }
}

ReactDOM.render(<Application />,document.getElementById('root'));
