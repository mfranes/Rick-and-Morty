import '../styles/CharacterCard.scss';

function CharacterCard() {

    return (
        <article className='characterCard'>
            <img src={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}  />
            <div className='characterCard__description'>
                <div className='characterCard__description__name'>Rick Sanchez</div>
                <div className='characterCard__description__specie'>Human</div>
            </div>
        </article>
    );
}

export default CharacterCard;