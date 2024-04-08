import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
function starshipCard() {
  const { store, actions } = useContext(Context);
  const [starship, setStarship] = useState([]);
  // Fetch people on component mount
  useEffect(() => {
    actions.fetchStarships();
  }, []);
  useEffect(() => {
    setStarship(store.starship);
  }, [store.starship]);
  // Handling the favorites toggle
  const handleFavorites = (starship) => {
    const isFavorite = store.favorites.some((fav) => fav.id === starship.id);
    if (isFavorite) {
      actions.removeFavorites(starship.name); // Make sure this correctly identifies the person to remove
    } else {
      actions.addFavorites(starship.name, starship.id, "starship");
    }
  };
  return (
    <div
      className="d-flex col-10 overflow-auto mt-5 mx-auto cards"
      style={{ height: "50rem" }}
    >
      {starship.map((starship, index) => {
        console.log(starship)
        const isFavorite = store.favorites.some(
          (fav) => fav.uid === starship.uid && fav.type === "starship"
        );
        return (
          <div
            key={index}
            className="card col-1 mx-1"
            style={{ width: "30rem", height: "48rem" }}
          >
            <h3>{starship.name}</h3>
            <img
              src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
              className="card-img-top"
              alt={person.name}
              style={{ height: "30rem", width: "30rem" }}
            />
            <Link to={`/starshipDetail/` + starship.uid}>Learn More</Link>
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
export default starshipCard;