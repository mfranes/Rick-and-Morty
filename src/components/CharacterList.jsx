import CharacterCard from './CharacterCard.jsx';
import '../styles/CharacterList.scss';


function CharacterList() {
    return (
        <section className='characterList'>
            {/* https://rickandmortyapi.com/api/character */}
            <CharacterCard />

            <CharacterCard />

            <CharacterCard />

            <CharacterCard />

            <CharacterCard />
        </section>
    )
}

export default CharacterList;