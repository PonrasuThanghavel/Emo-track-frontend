import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
// import Login from './components/Login';
import About from './components/Home';
import Explore from './components/Explore';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define a function to fetch product data from the API
    const fetchProductData = async () => {
      try {
        // Make a GET request to your API endpoint
        const response = await fetch('https://emo-track-backend.onrender.com/data');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the response data as JSON
        const data = await response.json();

        // Set the product data in the state
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    // Fetch product data when the component mounts
    fetchProductData();
  }, []);
  console.log(products)
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/explore" element={<Explore products={products} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
