import React, { useContext,useEffect } from "react";
import { Context } from "../store/appContext";
import {useParams} from "react-router-dom";

const Details = () => {
	const { store, actions } = useContext(Context);
    const {id} = useParams ()

    useEffect(() => {
    fetchPlanet()
      }, []);
      const fetchPlanet = async () => {
        const planet =  await actions.fetchPlanetDetail(id);
        console.log({planet,id})
      }
    return (
      <div className="card mt-5" style={{ width: "30rem", margin: "auto" }}>
      {true? (<><img
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        className="card-img-top"
        alt={name}
        style={{ height: "30rem" }}
      />
      <div className="card-body">
        <h1 className="card-title">{store.currentPlanet.name}</h1>
        <p className="card-text">Population: {store.currentPlanet.population}</p>
        <p className="card-text">Terrain: {store.currentPlanet.terrain}</p>
        <p className="card-text">diameter: {store.currentPlanet.diameter}</p>
        <p className="card-text">Rotation Time: {store.currentPlanet.rotation_period}</p>
      </div></>) : (<div>Loading...</div>)}
    </div>
  );   
}

export default Details