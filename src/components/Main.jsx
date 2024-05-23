import Filters from './Filters.jsx';
import CharacterList from './CharacterList.jsx';
import '../styles/Main.scss';


function Main() {
    return (
        <main className="main">
            <Filters />

            <CharacterList />
        </main>
    );
}

export default Main;