import Style from './Card.module.css';

function Card({id, name, species, gender, image, onClose}) {
   
   return (
      <div className={Style.imgContainer}>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} />
      </div>
      
   );
}

export default  Card;