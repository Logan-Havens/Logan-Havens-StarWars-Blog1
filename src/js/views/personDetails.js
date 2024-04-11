import React, { useContext,useEffect } from "react";
import { Context } from "../store/appContext";
const Details = ({uid}) => {
	const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchPersonDetail(uid);
      }, [uid, actions]);
  
    return (
        <div>
           Person Details Page
           { store.currentPerson && (
            <div>{store.currentPerson.name}</div>

           )
           }
        </div>
    )
}

export default Details