import './App.css'
import { useState } from 'react'
import Titulo from './components/Titulo/Titulo'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'



function App () {

  const [characters, setCharacters ] = useState([]);

  const onSearch = (id) => { 

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name && !characters.find((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
   };

  return (
  
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Titulo/>
      </div>

      <div>
        <Nav onSearch = {onSearch} />
        <Cards
          characters={characters}
        />
      </div>

    </div>
  )
}

export default App
