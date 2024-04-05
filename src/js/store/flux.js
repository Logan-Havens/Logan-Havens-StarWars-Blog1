const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			loadStarWarsPeople: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/people/')
					const data = await response.json()
					if (data?.message !== 'ok') throw Error

					const promises = data.results.map(person => fetch(person.url))
					const responses = await Promise.all(promises);
					const finalizedData = await Promise.all(responses.map(response => response.json()));
					const formattedData = finalizedData.map(response => {
						return { 
							description: response.result.description,
							uid: response.result.uid,
							...response.result.properties
						}
					})
					setStore({ characters: formattedData })
				} catch(e) {
					console.error(e)
				}
			},
			// Finish these functions!
			loadStarWarsPlanets: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/planets/')
					const data = await response.json()
					if (data?.message !== 'ok') throw Error

					const promises = data.results.map(planets => fetch(planets.url))
					const responses = await Promise.all(promises);
					const finalizedData = await Promise.all(responses.map(response => response.json()));
					const formattedData = finalizedData.map(response => {
						return { 
							description: response.result.description,
							uid: response.result.uid,
							...response.result.properties
						}
					})
					setStore({ planets: formattedData })
				} catch(e) {
					console.error(e)
				}
			},
			loadStarWarsVehicles: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/vehicles/')
					const data = await response.json()
					if (data?.message !== 'ok') throw Error

					const promises = data.results.map(vehicles => fetch(vehicles.url))
					const responses = await Promise.all(promises);
					const finalizedData = await Promise.all(responses.map(response => response.json()));
					const formattedData = finalizedData.map(response => {
						return { 
							description: response.result.description,
							uid: response.result.uid,
							...response.result.properties
						}
					})
					setStore({ vehicles: formattedData })
				} catch(e) {
					console.error(e)
				}
			},
		}
	};
};

export default getState;
