/**
 * Products parent component
 * Houses nested Product component 
 */
import data from '../data/db.json';
import Product from './Product';

const Products = () => {

    const products = data.products;

    return ( 

        <>
            <div className="product-header-container">
                <h2 className="section-header">Products</h2>
            </div>

            <Product products={products} />
        </>

     );
}
 
export default Products;