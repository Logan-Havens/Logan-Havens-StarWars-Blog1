const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			favorites: [],
			currentPerson: {},
			currentPlanet: {},
			currentStarship:{},

		},
		actions: {
			fetchPeople: async () => {
				const response = await fetch ("https://www.swapi.tech/api/people/")
				let data = await response.json();
				console.log(data)
				setStore({people: data.results})
	
			},
			fetchPlanets: async () => {
				const response = await fetch ("https://www.swapi.tech/api/planets/")
				let data = await response.json();
				console.log(data)
				setStore({planets: data.results})
	
			},
			fetchStarships: async () => {
				const response = await fetch ("https://www.swapi.tech/api/starships/")
				let data = await response.json();
				console.log(data)
				setStore({starships: data.results})
	
			},
			fetchPersonDetail: async (uid) => {
				const response = await fetch('https://www.swapi.tech/api/people/${uid}')
				if (!response.ok){
					throw new Error ("failed to fetch person details")
				}
				const data = await response.json();
				console.log(data)
				setStore({ currentPerson: data.response.properties});

		},
		fetchPlanetDetail: async (uid) => {
			const response = await fetch('https://www.swapi.tech/api/planets/${uid}')
			const data = await response.json();
			console.log(data)
			setStore({ currentPlanet: data.response.properties});

		},
		fetchStarshipsDetail: async (uid) => {
			const response = await fetch('https://www.swapi.tech/api/starships/${uid}')
			const data = await response.json();
			console.log(data)
			setStore({ currentStarship: data.response.properties});

		},
		addFavorites:(name, uid,type) => {
			const store = getStore();
			const newFavorite = {name,uid,type} 
			const newFavorites = [...store.favorites, newFavorite]
			setStore({favorites: newFavorites});
		},
		removeFavorites:(name) => {
			const store = getStore();
			const newFavorites = store.favorites.filter(
				(favorite) => favorite.name !== name
			);
			setStore({favorites: newFavorites});
		},
	},
};
};

export default getState;
