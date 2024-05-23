import '../styles/Header.scss';
import RickAndMortyLogo from '../images/RickAndMortyLogo.png'

function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={RickAndMortyLogo} alt='Rick and Morty Logo' />
        </header>
    );
}

export default Header;