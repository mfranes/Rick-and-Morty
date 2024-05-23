const getAllCharacters = () => {
    // https://rickandmortyapi.com/api/character
    return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
        .then((resp) => resp.json())
        .then((data) => {
            return data.results.map((character) => {
                return {
                    id: character.id,
                    name: character.name,
                    specie: character.species,
                    image: character.image,
                };
            });
        });
};

export default getAllCharacters;