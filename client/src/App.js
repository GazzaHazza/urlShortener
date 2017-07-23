import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import URLRedirect from './components/URLRedirect/URLRedirect';
import Home from './components/Home/Home';
import {Gradient} from 'uigradients';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Gradient gradient="cosmic_fusion">
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo"/>
						<h2>Welcome to React</h2>
					</div>
					<div className="App-intro"></div>
				</Gradient>
				<Route exact path="/" component={Home}/>

				<Route path="/:urlCode" component={URLRedirect} />
			</div>
		);
	}
}
function mapStateToProps(state, props) {
	return {search: state.search};
}
export default connect(mapStateToProps,)(App);
