/**
 * Reusable Image Cycler component 
 * Added a setInterval method here for auto-cycling functionality
 */
import { useState, useEffect } from 'react';
import '../styles/ImageCycler.css';

const ImageCycler = ({ images, intervalTime = 3000 }) => {
    // Store the currentIndex and setCurrentIndex() method using state
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Set up the timer to advance the image
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
            // If current index is the last image, reset to 0, otherwise, increment to 1
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        }, intervalTime);

        // Clean up the timer to prevent memory leaks
        return () => clearInterval(interval);
    }, [images.length, intervalTime]);
    
    return ( 
        <div className="cycler-container">
                {images.map((img, index) => (
                    <div className={`cycler-images ${index === currentIndex ? 'active' : ''}`} key={img.id} aria-hidden={index !== currentIndex}>
                        <img src={img.src} alt={img.alt} className="cycler-image" />
                    </div>
                ))}
        </div>
     );
}
 
export default ImageCycler;