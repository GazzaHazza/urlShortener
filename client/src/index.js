import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers, compose(applyMiddleware(thunk, createLogger()), window.devToolsExtension
	? window.devToolsExtension()
	: f => f))

ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter>
		<App/>
	</BrowserRouter>
</Provider>, document.getElementById('root'));

registerServiceWorker();