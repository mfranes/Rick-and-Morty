import '../styles/App.scss';
import CharacterList from './CharacterList.jsx';
import Filters from './Filters.jsx';
import Header from './Header.jsx';

function App() {

  return (
    <>
        <Header />

        <Filters />

        <CharacterList />

        <section>
            CharacterDetail
        </section>
    </>
  )
}

export default App
