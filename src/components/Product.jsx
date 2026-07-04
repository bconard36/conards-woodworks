/**
 * Reusable product component that accets an array and renders individual product cards
 */
import ProductCard from './ProductCard';
import '../styles/Products.css';

const Product = ({ products }) => {

    // Products maps over the products array and renders one ProductCard per item. 
    // Refactor ProductCard to live in its own file. Currently:
    // ProductCard lives within this map() - each group of img, h3, p, and button make up the ProductCard
    return ( 
        <div className="product-container">
            {products.map(product => (
                    <ProductCard product={product} key={product.id} />
            ))}
        </div>
     );
}
 
export default Product;