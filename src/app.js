// REACT code
"use strict"; // maybe need this?
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/layout/Home';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Yik Yak!</h2>
				<Home />
			</div>
        );
    }
}

ReactDOM.render(
  <App />, document.getElementById('root'));