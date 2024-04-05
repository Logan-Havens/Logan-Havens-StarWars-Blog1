import React, { useContext } from "react";
import { Context } from "../store/appContext";
const HomeGrid = () => {
	const { store } = useContext(Context);
    return (
        <div>
           Home Grid Page
            <div>
                <h1>Characters</h1>
                {store.characters.map(character => (
                <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '10px' }}>
                    {JSON.stringify(character)}
                </div>
                ))}
            </div>
            // Render the loaded data from the store!
            <div>
                <h1>Planets</h1>
                {store.planets.map(planet => JSON.stringify(planet))}
            </div>
            <div>
                <h1>Vehicles</h1>
                {store.vehicles.map(vehicles => JSON.stringify(vehicles))}
            </div>
        </div>
    )
}

export default HomeGrid