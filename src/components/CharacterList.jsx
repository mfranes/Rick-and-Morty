import CharacterCard from './CharacterCard.jsx';
import '../styles/CharacterList.scss';
import PropTypes, * as propTypes from 'prop-types';
import {useEffect, useState} from 'react';


function CharacterList({characters, nameFilterValue}) {
    const [characterCards, setCharacterCards] = useState([]);

    useEffect(() => {
        const mapCharacters = (characters) => {
            return characters.map(character => {
                return <CharacterCard
                    key={character.id}
                    character={character}
                />
            });
        };

        setCharacterCards(mapCharacters(characters));
    }, [characters]);


    return (
        <section className='characterList'>
            {characters.length === 0 && nameFilterValue.length > 0 ? (
                <p style={{color: 'white'}}>No hay ningún personaje que coincida con la palabra {nameFilterValue}</p>
            ) : (
                characterCards
            )}
        </section>
    )
}

CharacterList.propTypes = {
    characters: PropTypes.array,
    nameFilterValue: propTypes.string
};

export default CharacterList;