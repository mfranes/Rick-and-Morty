import '../styles/CharacterCard.scss';
import PropTypes from 'prop-types';

function CharacterCard({image, name, specie}) {

    return (
        <article className='characterCard'>
            <img src={image}  alt={`${name} image`}/>
            <div className='characterCard__description'>
                <div className='characterCard__description__name'>{name}</div>
                <div className='characterCard__description__specie'>{specie}</div>
            </div>
        </article>
    );
}

CharacterCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    specie: PropTypes.string,
};

export default CharacterCard;