import React from 'react';
import Card from '../Card/Card'
import Style from './Cards.module.css'
import { Link } from 'react-router-dom';


function Cards({characters, onClose}) {
   return (
   <div className={Style.container}>
      {
         characters? characters.map(elemento =>
            <Card
            name=<Link to={`/details/${elemento.id}`}>{elemento.name}</Link>
            species={elemento.species}
            gender={elemento.gender}
            image={elemento.image}
            onClose={() => onClose(elemento.id)}
            key={elemento.id}
            />) : <h3>No hay personajes</h3>


      }

      
                
   </div>);
};

export default Cards;

