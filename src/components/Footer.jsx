/**
 * Footer component - universal across all other components
 */
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Logo from '/assets/logo.svg';
const Footer = () => {

    const emailLink = 'conardswoodworks@gmail.com';

    return ( 

        <>
        <footer>
            <div className="footer-container">
                <div className="footer-contents">
                    <div className="footer-logo-container">
                        <Link to="/"><img src={Logo} alt="logo" className="footer-logo" /></Link>
                    </div>
                    <div className="contact-details">
                        <p>Parker, CO</p>
                        <p>Tel: (805) 328-8044</p>
                        <p>Email: conardswoodworks@gmail.com</p>
                        <div className="copyright">
                            <p>&copy; {new Date().getFullYear()} Copyright. | Conard's Woodworks, LLC. | All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>

     );
}
 
export default Footer;