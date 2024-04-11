import React, { useContext } from "react";
import { Context } from "../store/appContext";
import StarshipScroller from "../component/starshipScroller";
import PlanetScroller from "../component/planetScroller";
import PeopleScroller from "../component/peopleScroller";


const HomeGrid = () => {
    const { store } = useContext(Context);

    return (
        <div>
            <h1>Characters</h1>
            <PeopleScroller />
            <h1>Planets</h1>
           <PlanetScroller />
            <h1>Vehicles</h1>
           <StarshipScroller /> 
        </div>
    );
};

export default HomeGrid;


