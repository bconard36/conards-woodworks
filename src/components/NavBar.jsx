/**
 * NavBar component for CW application
 * @returns NavBar component
 */
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';
import DarkLogo from '/assets/dark_logo.svg';
import { useState, useEffect, useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false); // State replaces toggleNav as what controls the open/closed state
    const location = useLocation();
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => setIsOpen(false));

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return ( 
        <>
        {isOpen && <div className="nav-scrim" aria-hidden="true" />}
        <div ref={menuRef} className="top-nav">
            
            <button
                className="nav-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="primary-navigation"
                aria-label="Toggle navigation menu"
            >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="30" height="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
                    <line x1="5" y1="7" x2="19" y2="7"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <line x1="5" y1="17" x2="19" y2="17"></line>
                </svg>
            </button>

            <Link to="/" className="no-underline"><p className="logo-text">Conard's Woodworks</p></Link>

            <nav id="primary-navigation" className="nav-menu" hidden={!isOpen}>
                <div className="logo">
                    <img id="hero" src={DarkLogo} alt="The letters C & W" className="logo-image" />
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">My Story</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

        </div>
        </>
        
        
     );
}
 
export default NavBar;