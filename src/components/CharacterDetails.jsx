import '../styles/CharacterDetails.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function CharacterDetails({character}) {
    if (!character) {
        return <p style={{color: 'white'}}>El personaje que buscas no existe</p>;
    }

    return (
        <section className='characterDetailsSection'>
            <div className='characterDetailsSection__back'>
                <Link className={'characterDetailsSection__back__link'} to='/'>
                    {'<'} Volver
                </Link>
            </div>
            <article className='characterDetailsSection__card'>
                <img src={character.image} alt={`${character.name} image`}/>
                <div className='characterDetailsSection__card__text'>
                    <p className='characterDetailsSection__card__text__name'>{character.name}</p>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Origin: {character.origin}</p>
                    <p>Episodes: {character.numberOfepisodes}</p>
                </div>
            </article>
        </section>
    );

}

CharacterDetails.propTypes = {
    character: PropTypes.object
};

export default CharacterDetails;