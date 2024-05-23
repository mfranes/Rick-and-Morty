import Filters from './Filters.jsx';
import CharacterList from './CharacterList.jsx';
import '../styles/Main.scss';
import PropTypes from 'prop-types';


function Main({characters, handleNameFilterChange}) {
    return (
        <main className="main">
            <Filters handleNameFilterChange={handleNameFilterChange}/>

            <CharacterList characters={characters}/>
        </main>
    );
}

Main.propTypes = {
    characters: PropTypes.array,
    handleNameFilterChange: PropTypes.func
};

export default Main;