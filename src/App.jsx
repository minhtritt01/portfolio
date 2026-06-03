import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import loadinggif from './assets/loading.gif';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    loadData();
  }, [loading]);
  return (
    <div>
      {loading ? (
        <div className='w-full h-screen flex justify-center items-center bg-gradient-to-b from-black to-gray-800'>
          <img
            src={loadinggif}
            className='w-[150px] h-[150px]'
            alt='loading-gif'
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />
          <SocialLinks />
          <ToastContainer />
        </>
      )}
    </div>
  );
}

export default App;
