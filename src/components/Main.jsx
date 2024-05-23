import Filters from './Filters.jsx';
import CharacterList from './CharacterList.jsx';
import '../styles/Main.scss';
import PropTypes from 'prop-types';


function Main({characters}) {
    return (
        <main className="main">
            <Filters />

            <CharacterList characters={characters} />
        </main>
    );
}

Main.propTypes = {
    characters: PropTypes.array
};

export default Main;