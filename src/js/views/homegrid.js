import React, { useContext } from "react";
import { Context } from "../store/appContext";

const HomeGrid = () => {
    const { store } = useContext(Context);

    return (
        <div>
            <h1>Characters</h1>
            {store.people && store.people.map(person => (
                <div key={person.uid}>{JSON.stringify(person)}</div>
            ))}
            <h1>Planets</h1>
            {store.planets && store.planets.map(planet => (
                <div key={planet.uid}>{JSON.stringify(planet)}</div>
            ))}
            <h1>Vehicles</h1>
            {store.starships && store.starships.map(starship => (
                <div key={starship.uid}>{JSON.stringify(starship)}</div>
            ))}
        </div>
    );
};

export default HomeGrid;


