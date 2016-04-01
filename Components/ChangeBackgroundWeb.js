'use strict';

import React from 'react';

const { Component } = React;

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'grey', 'pink'];

export default class ChangeBackgroundWeb extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			bgColor: 'white'
		}
	}

	renderColorButtons() {
		return colors.map( (c,i) => {
			return (
				<a
					key={i}
					onClick={_ => { this.setState({bgColor: c}) }}
				>
					<p>Turn background {c}</p>
				</a>
			);
		});
	}

	render() {
		return (
			<div className={`color-changer ${this.state.bgColor}`}>
				{this.renderColorButtons()}
			</div>
		);
	}
}