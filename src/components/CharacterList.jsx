import '../styles/CharaterList.css';

function CharacterList() {
    return (
        <section>
            {/* https://rickandmortyapi.com/api/character */}
            CharacterList

            <article className='characterCard'>
                <div>Picture1</div>
                <div>Name1</div>
                <div>Specie1</div>
            </article>

            <article className="characterCard">
                <div>Picture2</div>
                <div>Name2</div>
                <div>Specie2</div>
            </article>

        </section>
    )
}

export default CharacterList;