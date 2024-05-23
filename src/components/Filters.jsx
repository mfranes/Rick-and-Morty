import '../styles/Filters.scss';

function Filters() {

    return (
        <section className='filtersSection'>
            <form className='filtersSection__searchCharacter'>
                <input type='text' id='searchCharacterInput' className='filtersSection__searchCharacter--input'/>
            </form>
        </section>
    );
}

export default Filters;