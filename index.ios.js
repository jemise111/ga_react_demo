'use strict';

import React from 'react-native';
import ChangeBackground from './Components/ChangeBackground';

const {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View
} = React;

export default class App extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Color Changer</Text>
				<ChangeBackground />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		fontSize: 24,
		margin: 50,
		marginBottom: 10,
		textAlign: 'center'
	}
});
AppRegistry.registerComponent('ga_demo', () => App);

