import "./Footer.css"
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <div className="FooterCopyRigth">
                <p><strong>&copy;</strong> 2025</p>
            </div>
            <div className="footerNavigation">
                <Link to="/entre-no-time">Trabalhe Conosco</Link>
                <Link to="/sobre">Politica de Privacidade</Link>
                <Link to="/sobre">Termo de Uso</Link>
            </div>
        </div>
    );
}