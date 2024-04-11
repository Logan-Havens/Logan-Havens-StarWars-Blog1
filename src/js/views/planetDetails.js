import React, { useContext,useEffect } from "react";
import { Context } from "../store/appContext";
import {useParams} from "react-router-dom";

const Details = () => {
	const { store, actions } = useContext(Context);
    const {id} = useParams ()

    useEffect(() => {
    fetchPlanets()
      }, []);
      const fetchPlanets = async () => {
        const planet =  await actions.fetchPlanetDetail(id);
        console.log({planet,id})
      }
    return (
        <div>
           Planet Details Page
          
            <div>{store?.currentPlanet?.name || " "}</div>

        
        </div>
    )
}

export default Details