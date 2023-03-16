import './App.css'
import { useEffect, useState } from 'react'
import Titulo from './components/Titulo/Titulo'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Abaut from './components/Abaut/Abaut'
import Details from './components/Details/Details'
import Form from './components/Form/Form'

function App () {

  const [characters, setCharacters ] = useState([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const username = "maiger5@hotmail.com";
  const password = "Linda4785";

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Acceso incorrecto");
    }
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  };

  const onSearch = (id) => { 
    const URL_APP = "https://be-a-rym.up.railway.app/api";
    const KEY = "6d7a1064b064.63438ed7f6697ad22599";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje Repetido")
    }

    fetch(`${URL_APP}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          // setCharacters([...characters, data]);
        } else {
          alert("Personaje Repetido");
        }
      });
  };

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Titulo/>
      {pathname !== "/" && <Nav onSearch = {onSearch} />}
      
      <Routes>

        <Route 
          path='/home' 
          element={<Cards 
          characters={characters} 
          onClose={onClose}/>} 
        />
        <Route 
          path='/abaut' 
          element={<Abaut/>} />
        <Route 
          path='/details/:id' 
          element={<Details/>} 
        />
        <Route 
          login={login}
          path='/' 
          element={<Form login={login} />} 
        />

      </Routes>                                                                                                                                            
    </div>
  );
};

export default App

