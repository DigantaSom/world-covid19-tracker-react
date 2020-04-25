import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// in the very beginning, install the below dependencies:
/*
(we'll make get request with API using axios)
npm install --save axios prop-types react-router @material-ui/core react
npm install --save axios react-chartjs-2 react-countup classnames	(only a react wrapper for chart.js)
npm install --save chart.js
npm install --save @material-ui/core
*/

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
