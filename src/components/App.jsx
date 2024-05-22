function App() {

  return (
    <>
        <header>
            Logo Rick and Morty
        </header>

        <section>
            Filters
        </section>

        <section>
            {/* https://rickandmortyapi.com/api/character */}
            CharacterList

            <article>
                <div>Picture1</div>
                <div>Name1</div>
                <div>Specie1</div>
            </article>

            <article>
                <div>Picture2</div>
                <div>Name2</div>
                <div>Specie2</div>
            </article>

        </section>

        <section>
            CharacterDetail
        </section>
    </>
  )
}

export default App
