const getAllCharacters = () => {
    // https://rickandmortyapi.com/api/character
    // https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json
    return fetch('https://rickandmortyapi.com/api/character')
        .then((resp) => resp.json())
        .then((data) => {
            return data.results.map((result) => {
                return {
                    id: `${result.id}`,
                    name: result.name,
                    status: result.status,
                    species: result.species,
                    image: result.image,
                    origin: result.origin.name,
                    numberOfepisodes: result.episode.length
                };
            });
        });
};

export default getAllCharacters;