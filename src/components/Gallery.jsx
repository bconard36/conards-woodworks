/**
 * Gallery component 
 * Uses state and conditional rendering to apply gallery filters
 * Imports data from a json file 
 * Houses 2 nested components - Product and CategoryFilter
 */
import data from '../data/db.json';
import CategoryFilter from './CategoryFilter';
import Product from './Product';
import { useState } from 'react';

const Gallery = () => {

    const categories = [
        "All",
        "Prep",
        "Setup",
        "Assembly",
        "Garden",
        "Furniture"
    ]

    const gallery = data.gallery;
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredGallery = activeCategory === "All"
        ? gallery
        : gallery.filter(item => item.category === activeCategory);

    return ( 
        <>
            <div className="product-header-container">
                <h2 className="section-header">Gallery</h2>
            </div>

            <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <Product products={filteredGallery} />
        </>
     );
}
 
export default Gallery;