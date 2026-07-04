/**
 * Category Filter component for gallery filter buttons 
 * @param {Array} categories - array of category objects  
 * @param {Object} activeCategory - active filter category 
 * @param {Boolean} setActiveCategory - default is false - handles the active category setting 
 * @returns buttons that set the active filter category 
 */

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {

    return ( 
        <div className="category-container">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`category-pill ${category === activeCategory ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
     );
}
 
export default CategoryFilter;