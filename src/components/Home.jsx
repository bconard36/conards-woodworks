/**
 * Home component
 * Renders the home page 
 * Nested image cycler and stats strip components 
 */
import ImageCycler from './ImageCycler';
import '../styles/Home.css';
import whiteWashAndGoldenOak from '/assets/white_wash_and_gldn_oak_finsh.jpeg';
import planterSelection from '/assets/planter_box_selection_01.jpeg';
import goldenOakFinish from '/assets/gldn_oak_finish.jpeg';
import gallonSizeBoxes from '/assets/gal_size_boxes.jpeg';
import { Link } from 'react-router-dom';
import StatsStrip from './StatsStrip';

const Home = () => {

    const heroImages = [
        { src: whiteWashAndGoldenOak, alt: 'Four wooden garden planter boxes on display', id: 1 },
        { src: planterSelection, alt: 'A selection of three small wooden planter boxes', id: 2 },
        { src: goldenOakFinish, alt: 'A close-up of three wooden planter boxes, arranged to show all sides.', id: 3 },
        { src: gallonSizeBoxes, alt: 'Two custom made gallon size wooden garden planter boxes', id: 4 },
    ];

    return ( 
        <>
            <div className="hero">
                <p className="hero-tagline">Strong Roots. Timeless Craftsmanship</p>
                <p className="hero-subtext">Custom woodworking from a Parker, CO garage — planter boxes, furniture, and pieces made to order.</p>
                <div className="hero-cta-group">
                    <Link to="/products" className="cta-primary">See the Work</Link>
                    <Link to="/contact" className="cta-secondary">Request a Quote</Link>
                </div>
            </div>
            <StatsStrip />
            <ImageCycler images={heroImages} intervalTime={2000} />
        </>
     );
}
 
export default Home;