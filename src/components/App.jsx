import '../styles/App.scss';
import Header from './Header.jsx';
import Main from './Main.jsx';
import getAllCharacters from '../services/rickAndMortyApi.js';
import {useEffect, useState} from 'react';

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


    return (
    <>
        <Header />

        <Main characters={filteredCharacters()} handleNameFilterChange={handleNameFilterChange} />


        <section>
            CharacterDetail
        </section>
    </>
  )
}

export default App;
