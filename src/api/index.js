import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
	let changeableUrl = url;

	if(country) {
		changeableUrl = `${url}/countries/${country}`;
	}

	try {
		/* const response = await axios.get(url);
		 return response; */

		 // taking only relevant data from the API (destructering the api json)
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);	// url, in the beginning

		const modifiedData = {confirmed, recovered, deaths, lastUpdate};	// if key and value's names are equal, then we can use js objects like this
		return modifiedData;

	} catch (error) {
		console.log(error);
	}
}

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);	// after destructoring the object, we got array of objects
		// console.log(data);

		const modifiedData = data.map(dailyData => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate
		}));

		return modifiedData;

	} catch (error) {
		console.log(error);
	}
}

export const fetchCountries = async () => {
	try {
		const { data: {countries} } = await axios.get(`${url}/countries`);	// we get, array of objects
		
		return countries.map(country => country.name);	// we don't want iso2, iso3, we want just the name of each country

	} catch (error) {
		console.log(error);
	}
}