/**
 * Parent / Route Handler Component 
 * Handles routes and renders global components 
 */
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Gallery from './components/Gallery';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';


function App() {

  return (
    <>
        <NavBar />
        <main>
          <div className="content">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/products" element={ <Products /> } />
              <Route path="/gallery" element={ <Gallery /> } />
              <Route path="/contact" element={ <Contact /> } />
              <Route path="*" element={<NotFound  />} />
            </Routes>
          </div>
        </main>
        <Footer />
    </>
  )
}

export default App
