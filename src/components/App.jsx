import '../styles/App.scss';
import CharacterList from './CharacterList.jsx';

function App() {

  return (
    <>
        <header>
            Logo Rick and Morty
        </header>

        <section>
            Filters
        </section>

        <CharacterList />

        <section>
            CharacterDetail
        </section>
    </>
  )
}

export default App
