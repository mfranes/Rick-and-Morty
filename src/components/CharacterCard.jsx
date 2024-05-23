import '../styles/CharacterCard.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CharacterCard({character}) {

    return (
        <article className='characterCard'>
            <Link className={'characterCard__link'} to={`/character/${character.id}`}>
                <img src={character.image} alt={`${character.name} image`}/>
                <div className='characterCard__description'>
                    <div className='characterCard__description__name'>{character.name}</div>
                    <div className='characterCard__description__specie'>{character.specie}</div>
                </div>
            </Link>
        </article>
    );
}

CharacterCard.propTypes = {
    character: PropTypes.object
};

export default CharacterCard;