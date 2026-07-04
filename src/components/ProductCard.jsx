/**
 * Product Card component 
 * @param {JSON} product - single product object (apparel or accessory item) 
 * @returns A product card element to be rendered in the parent components
 */
import { useLocation, useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const showButton = location.pathname === '/products';

    const handleQuoteRequest = () => {
        navigate('/contact', {
            state: {
                interest: "Custom",
                interestLabel: "Quote for Custom Order",
                message: `I'm interested in a custom quote for: ${product.name}`
            }
        });
    };

    return ( 
        <div className="product">
            <div className="product-image-container">
                <img
                src={product.image}
                alt={product.alt || product.name}
                className="product-image"
                />
            </div>

            <h3>{product.name}</h3>
            <p>
                {product.description || "No description available."}
            </p>

            {showButton && (
                <button className="quote-button" onClick={handleQuoteRequest}>
                    Request a Custom Quote
                </button>
            )}
        </div>
     );
}
 
export default ProductCard;