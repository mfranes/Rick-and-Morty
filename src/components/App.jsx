import '../styles/App.scss';
import Header from './Header.jsx';
import getAllCharacters from '../services/rickAndMortyApi.js';
import {useEffect, useState} from 'react';
import CharacterDetails from './CharacterDetails.jsx';
import {matchPath, Route, Routes, useLocation} from 'react-router-dom';
import Main from './Main.jsx';

function App() {
    const [characters, setCharacters] = useState([]);
    const [nameFilterValue, setNameFilterValue] = useState('');

    useEffect(() => {
        getAllCharacters().then(response => {
            setCharacters(response);
        });
    }, []);

    const handleNameFilterChange = (value) => {
        setNameFilterValue(value);
    };

    const filteredCharacters = () => {
        return characters.filter(character => {
            return character.name.toLowerCase().includes(nameFilterValue.toLowerCase());
        });
    };

    const { pathname } = useLocation()
    const characterRoute = matchPath("/character/:id", pathname)
    const urlCharacterId = characterRoute ? characterRoute.params.id : null;
    const selectedCharacter = characters.find(character => character.id === urlCharacterId)

    return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={
                <>
                    <Main characters={filteredCharacters()}
                          nameFilterValue={nameFilterValue}
                          handleNameFilterChange={handleNameFilterChange}
                    />
                </>
            }
            />
            <Route path="/character/:id" element={
                <CharacterDetails character={selectedCharacter}/>
            }
            />
            <Route path="*" element={<h2 style={{color: 'white'}}>Página no encontrada</h2>} />
        </Routes>
    </>
  )
}

export default App;
