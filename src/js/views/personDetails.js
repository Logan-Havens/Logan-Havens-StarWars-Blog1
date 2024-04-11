import React, { useContext,useEffect } from "react";
import { Context } from "../store/appContext";
import {useParams} from "react-router-dom";

const Details = () => {
	const { store, actions } = useContext(Context);
    const {id} = useParams ()

    useEffect(() => {
    fetchPerson()
      }, []);
      const fetchPerson = async () => {
        const person =  await actions.fetchPersonDetail(id);
        console.log({person,id})
      }
    return (
        <div>
           Person Details Page
          
            <div>{store?.currentPerson?.name || " "}</div>

        
        </div>
    )
}

export default Details