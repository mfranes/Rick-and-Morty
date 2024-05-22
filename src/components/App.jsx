import '../styles/App.scss';
import CharacterList from './CharacterList.jsx';
import Filters from './Filters.jsx';

function App() {

  return (
    <>
        <header>
            Logo Rick and Morty
        </header>

        <Filters />

        <CharacterList />

        <section>
            CharacterDetail
        </section>
    </>
  )
}

export default App
