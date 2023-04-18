import "./css/Footer.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
    
            <div className="col-1">
                <h3>Clube</h3>
                <a href="/">Notícias</a>
                <a href="/Clube">História</a>
                <a href="/Multimedia">Competições</a>

            </div>

            <div className="col-2">
                <h3>Recursos</h3>
                <a href="/Graduacao">Graduação</a>
                <a href="/Graduacao">Quizes</a>
                <a href="/Contactos">Contactos</a>
                <a href="/Contactos">Q&A</a>
            </div>


            <div className="col-3">
                <h3>Contactos</h3>
                <p> Maia <br/>Porto, Portugal<br/></p>
                <div className="social-icons">
                    <FaFacebook />
                    <FaInstagram />
                </div>
            </div>

        </footer>
    )
}

export default Footer;
