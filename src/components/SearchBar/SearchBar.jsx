import { useState } from "react";

function SearchBar({onSearch}) {

   const [id, setId] = useState("");
   
   const handlechange = (event) => {
      setId(event.target.value)
   };

   return (
      <div>
         <input type='search' onChange = {handlechange} />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
};

export default SearchBar;