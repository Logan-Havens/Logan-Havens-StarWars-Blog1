import React, { useContext,useEffect } from "react";
import { Context } from "../store/appContext";
import {useParams} from "react-router-dom";

const Details = () => {
	const { store, actions } = useContext(Context);
    const {id} = useParams ()

    useEffect(() => {
    fetchStarship()
      }, []);
      const fetchStarship = async () => {
        const starship =  await actions.fetchStarshipsDetail(id);
        console.log({starship,id})
      }
    return (
      <div className="card mt-5" style={{ width: "30rem", margin: "auto" }}>
      {true? (<><img
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
        className="card-img-top"
        alt={name}
        style={{ height: "30rem" }}
      />
      <div className="card-body">
        <h1 className="card-title">{store.currentStarship.name}</h1>
        <p className="card-text">Class: {store.currentStarship.starship_class}</p>
        <p className="card-text">Crew Members: {store.currentStarship.crew}</p>
        <p className="card-text">Passengers: {store.currentStarship.passengers}</p>
        <p className="card-text">Length: {store.currentStarship.length}</p>
      </div></>) : (<div>Loading...</div>)}
    </div>
  );   
}

export default Details