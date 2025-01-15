import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row justify-evenly items-center border-t border-gray-200 text-black py-16 font-medium">
            <div className="text-center md:text-left">
                <p><strong>&copy;</strong> 2025</p>
            </div>
            <div className="mt-4 md:mt-0 text-center">
                <Link to="/entre-no-time" className="mx-4 text-black hover:text-gray-700">Trabalhe Conosco</Link>
                <Link to="/sobre" className="mx-4 text-black hover:text-gray-700">Política de Privacidade</Link>
                <Link to="/sobre" className="mx-4 text-black hover:text-gray-700">Termo de Uso</Link>
            </div>
        </div>
    );
}
