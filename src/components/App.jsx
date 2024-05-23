import '../styles/App.scss';
import Header from './Header.jsx';
import Main from './Main.jsx';
import getAllCharacters from '../services/rickAndMortyApi.js';
import {useEffect, useState} from 'react';

function App() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getAllCharacters().then(response => {
            setCharacters(response);
        });
    }, []);


    return (
    <>
        <Header />

        <Main characters={characters} />


        <section>
            CharacterDetail
        </section>
    </>
  )
}

export default App;
