import '../styles/CharaterList.scss';

function CharacterCard() {

    return (
        <article className='characterCard'>
            <img src={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"} />
            <div className='characterCard__description'>
                <div>Rick Sanchez</div>
                <div>Human</div>
            </div>
        </article>
    );
}

export default CharacterCard;