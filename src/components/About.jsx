/**
 * About Component of Conard's Woodworks
 * Renders individual paragraph cards one at a time 
 * Image files to be added 
 */
import { useEffect, useState } from 'react';
import '../styles/About.css';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => setIsVisible(true), 120);
        return () => window.clearTimeout(timer);
    }, []);

    return (

        <>
            <div className="about-container">
                <h2 className="section-header">30 Years and a Few Splinters Later...</h2>
                <div className="about-content">
                    <div className={`about-paragraph about-paragraph-one ${isVisible ? 'is-visible' : ''}`}>
                        <p>
                            My woodworking story begins in the US Navy Seabees, where I served as a Builder (BU), 
                            working the wood shop on four overseas deployments. I've always found enjoyment, satisfaction, 
                            and reward in woodworking — in making something that's going to last a while.
                        </p>
                    </div>
                    <div className={`about-paragraph about-paragraph-two ${isVisible ? 'is-visible' : ''}`}>
                        <p>
                            When I got out of the Navy, I spent eight years building custom doors, windows, and trim while 
                            attending school, along with furniture — dressers, shelves, tables, and more. Once I married 
                            and started our family, I worked nights at a cabinet shop so my wife could be the stay-at-home 
                            mom we both wanted her to be for our three sons.
                        </p>
                    </div>
                    <div className={`about-paragraph about-paragraph-three ${isVisible ? 'is-visible' : ''}`}>
                        <p>
                            After retiring, I decided to get back into woodworking after 30 years away from it. It had been 
                            an early passion of mine — something I truly enjoyed at the start of my career and picked up 
                            now and then over the years — and I finally had the time to see what I remembered! My career 
                            ended up in construction, but my woodworking days were back at the very beginning of that 
                            journey, so it had been a while. 
                        </p>
                    </div>
                    <div className={`about-paragraph about-paragraph-four ${isVisible ? 'is-visible' : ''}`}>
                        <p>
                            The pictures on this site reflect what I've made, what I can make, and what I'm currently making — 
                            right now, that's elevated garden boxes and planter boxes. I'll be getting back to shelves and 
                            small tables once spring planting season wraps up. I also take custom orders!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About;