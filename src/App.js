import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			notify: false
		};
		this.handleBtnClick = this.handleBtnClick.bind(this);
	}

	handleBtnClick = () => {
		console.log('inside event');
		this.setState(() => {
			return {notify: !this.state.notify}
		});
		const elem = document.querySelector('.new-update');
		elem.setAttribute("style", "display: block");
	};

	render() {
		const toggleDisplay = () => {
			return this.state.notify === false ? {display: "none"} : {display: "block"}
		};
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">this is updated build 3</h1>
					<h2 className="new-update" style={toggleDisplay()}>New version of page is available, Please refresh</h2>
				</header>
				<footer>
					<div>
						<button onClick={this.handleBtnClick}>Click Me</button>
					</div>
				</footer>
			</div>
		);
	}
}

export default App;
