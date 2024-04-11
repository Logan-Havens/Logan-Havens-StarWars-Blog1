import React, { useContext,useEffect } from "react";
import { Context } from "../store/appContext";
import {useParams} from "react-router-dom";

const Details = () => {
	const { store, actions } = useContext(Context);
    const {id} = useParams ()

    useEffect(() => {
    fetchStarships()
      }, []);
      const fetchStarships = async () => {
        const starship =  await actions.fetchStarshipsDetail(id);
        console.log({starship,id})
      }
    return (
        <div>
           Starship Details Page
          
            <div>{store?.currentStarship?.name || " "}</div>

        
        </div>
    )
}

export default Details