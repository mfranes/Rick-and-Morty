import CharacterCard from './CharacterCard.jsx';

function CharacterList() {
    return (
        <section>
            {/* https://rickandmortyapi.com/api/character */}
            <CharacterCard />

            <CharacterCard />
        </section>
    )
}

export default CharacterList;