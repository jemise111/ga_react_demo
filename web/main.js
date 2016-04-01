import ReactDOM from 'react-dom';
import React from 'react';

import ChangeBackground from '../Components/ChangeBackgroundWeb';

const { Component } = React;

export default class App extends Component {

	render() {
		return (
			<div className='container'>
				<h1>Color Changer</h1>
				<ChangeBackground />
			</div>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);