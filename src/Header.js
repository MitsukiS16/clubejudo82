import "./css/Header.css";
import { GiBlackBelt } from "react-icons/gi";


function Header() {
    return (
        <header>
            <div className="logo">
                <GiBlackBelt />
                <a href="/">Clube Judo 82</a>
            </div>

            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' for="menu-toggle">
                <div className='menu-button'></div>
            </label>

            <ul className="menu">
                <li><a href="/clube">O Clube</a></li>
                <li><a href="/multimedia">Multimédia</a></li>
                <li><a href="/graduacao">Graduação</a></li>
                <li><a href="/atletas">Atletas</a></li> 
                <li><a href="/contactos">Contactos</a></li>
            </ul>
        </header>
    )
}

export default Header;
