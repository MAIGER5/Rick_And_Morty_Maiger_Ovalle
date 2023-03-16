import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';





function Details() {

    const [character, setCharacter] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const URL_APP = "https://be-a-rym.up.railway.app/api";
        const KEY = "6d7a1064b064.63438ed7f6697ad22599";
    
        axios(`${URL_APP}/character/${id}?key=${KEY}`).then((response)=>setCharacter(response.data));
     }, []);
     
    return (
        
        <div>
            <div>
                <h2>DETALLES DE LOS PERSONAJES</h2>
            </div>

            <div>
                <h3>Id:  {character.id} </h3>
                <h3>Name:  {character.name} </h3>
                <h3>Status:   {character.status} </h3>
                <h3>Specie:   {character.species} </h3>
                <h3>Type:  {character.type} </h3>
                <h3>Gender:  {character.gender} </h3>
                <h3>Created:  {character.created} </h3>
                <img src={character.image} alt="imagen del personaje" />
            </div>
        </div>

    )
}

export default Details
