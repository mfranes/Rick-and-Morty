import CharacterCard from './CharacterCard.jsx';
import '../styles/CharacterList.scss';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';


function CharacterList({characters}) {
    const [characterCards, setCharacterCards] = useState([]);

    useEffect(() => {
        const mapCharacters = (characters) => {
            return characters.map(character => {
                return <CharacterCard
                    key={character.id}
                    image={character.image}
                    name={character.name}
                    specie={character.specie}
                />
            });
        };

        setCharacterCards(mapCharacters(characters));
    }, [characters]);


    return (
        <section className='characterList'>
            {characterCards}
        </section>
    )
}

CharacterList.propTypes = {
    characters: PropTypes.array
};

export default CharacterList;