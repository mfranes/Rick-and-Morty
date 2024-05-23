import '../styles/Filters.scss';
import PropTypes from 'prop-types';

function Filters({handleNameFilterChange}) {

    const handleInputChange = (event) => {
        event.preventDefault();
        const value = event.currentTarget.value;
        handleNameFilterChange(value);
    };

    return (
        <section className='filtersSection'>
            <form className='filtersSection__searchCharacter'>
                <input type='text' id='searchCharacterInput' className='filtersSection__searchCharacter--input' onChange={handleInputChange}/>
            </form>
        </section>
    );
}

Filters.propTypes = {
    handleNameFilterChange: PropTypes.func
};

export default Filters;