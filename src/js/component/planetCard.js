import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
function planetCard() {
  const { store, actions } = useContext(Context);
  const [planet, setPlanet] = useState([]);
  // Fetch people on component mount
  useEffect(() => {
    actions.fetchPlanets();
  }, []);
  useEffect(() => {
    setPlanet(store.planet);
  }, [store.planet]);
  // Handling the favorites toggle
  const handleFavorites = (planet) => {
    const isFavorite = store.favorites.some((fav) => fav.id === planet.id);
    if (isFavorite) {
      actions.removeFavorites(planet.name); // Make sure this correctly identifies the person to remove
    } else {
      actions.addFavorites(planet.name, planet.id, "planet");
    }
  };
  return (
    <div
      className="d-flex col-10 overflow-auto mt-5 mx-auto cards"
      style={{ height: "50rem" }}
    >
      {planet.map((planet, index) => {
        console.log(planet)
        const isFavorite = store.favorites.some(
          (fav) => fav.uid === planet.uid && fav.type === "planet"
        );
        return (
          <div
            key={index}
            className="card col-1 mx-1"
            style={{ width: "30rem", height: "48rem" }}
          >
            <h3>{planet.name}</h3>
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              className="card-img-top"
              alt={person.name}
              style={{ height: "30rem", width: "30rem" }}
            />
            <Link to={`/planetDetail/` + planet.uid}>Learn More</Link>
            <button
              className={isFavorite ? "fas fa-heart" : "far fa-heart"}
              onClick={() => handleFavorites(person)}
            >
              {" "}
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default planetCard;