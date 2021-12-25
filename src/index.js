
import ReactDOM from "react-dom";

import App from './App';

import React, { Component } from 'react';

class Index extends Component {
  render() {
    return (
      <div>
        <App/>
      </div>
    );
  }
}

ReactDOM.render(<Index/>,document.getElementById('root'));
