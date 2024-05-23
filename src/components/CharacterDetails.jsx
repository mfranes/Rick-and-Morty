import '../styles/CharacterDetails.scss';


function CharacterDetails() {

    return (
        <section className='characterDetailsSection'>
            <div className='characterDetailsSection__back'>{'<'} Volver</div>
            <article className='characterDetailsSection__card'>
                <img src='https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/1.jpeg' />
                <div className='characterDetailsSection__card__text'>
                    <p className='characterDetailsSection__card__text__name'>Rick Sanchez</p>
                    <p>Status: Alive</p>
                    <p>Species: Human</p>
                    <p>Origin: Earth (c-137)</p>
                    <p>Episodes: 31</p>
                </div>
            </article>
        </section>
    );

}

export default CharacterDetails;