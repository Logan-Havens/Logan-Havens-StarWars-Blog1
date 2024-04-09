import React, { useContext } from "react";
import { Context } from "../store/appContext";
const Details = () => {
	const { store } = useContext(Context);
    return (
        <div>
           Person Details Page
        </div>
    )
}

export default Details