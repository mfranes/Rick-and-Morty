import Filters from './Filters.jsx';
import CharacterList from './CharacterList.jsx';
import '../styles/Main.scss';
import PropTypes from 'prop-types';


function Main({characters, nameFilterValue, handleNameFilterChange}) {
    return (
        <main className="main">
            <Filters handleNameFilterChange={handleNameFilterChange} nameFilterValue={nameFilterValue} />

            <CharacterList
                characters={characters}
                nameFilterValue={nameFilterValue}
            />
        </main>
    );
}

Main.propTypes = {
    characters: PropTypes.array,
    nameFilterValue: PropTypes.string,
    handleNameFilterChange: PropTypes.func
};

export default Main;