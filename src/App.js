import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

import styles from './App.module.css';

import coronaImage from './images/covid-19.png';

class App extends React.Component {
	// constructor() is already used in the back-end automatically by React.
	state = {
		data: {},
		country: '',
	}

	async componentDidMount() {
		const fetchedData = await fetchData();

		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		// fetch the data,
		// then, set the state

		const fetchedData = await fetchData(country);

		console.log(country);
		console.log(fetchedData);

		this.setState({ data: fetchedData, country: country });
	}

	render() {
		const { data, country } = this.state;	// destructering
		
		return (
			<div className={styles.container}>	{/* this neat trick makes sure that this style only applies to 'App */}
				<img className={styles.image} src={coronaImage} alt="COVID-19"/>
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
