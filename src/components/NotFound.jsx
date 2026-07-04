/**
 * 404 Catch All for Conard's Woodworks
 */
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
    return ( 
        <>
            <div className="not-found-container">
                <h3 className="not-found-title">Oops!</h3>
                <p className="not-found-text">Nothing to see here, just the scrap pile.</p>
                <Link to="/" className="not-found-link">Return to Home</Link>
            </div>
        </>
     );
}
 
export default NotFound;