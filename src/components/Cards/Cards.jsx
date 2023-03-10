import Card from '../Card/Card'
import Style from './Cards.module.css'


function Cards({characters}) {
   return (
   <div className={Style.container}>
      {
         characters? characters.map(elemento =>
            <Card
            name={elemento.name}
            species={elemento.species}
            gender={elemento.gender}
            image={elemento.image}
            onClose={() => alert('Emulamos que se cierra la card')}
            key={elemento.id}
            />) : <h3>No hay personajes</h3>
      }
                
   </div>);
}

export default Cards;