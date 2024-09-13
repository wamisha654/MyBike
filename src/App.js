import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './SignIn/SignIn.js';
import Appointment from './Service/Appointment.js';
import Navigation from './Navigation/Navigation.js';
import ProductList from './Product/ProductList.js';
import Footer from './Footer/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home.js'; 
import Service from './Service/Service.js'; 
import Cart from './Product/Cart/Cart.js'; 
import AddedCart from './Product/AddedCart/AddedCart.js';
import Delivery from './Product/Delivery/Delivery.js';

const App = () => {
  const [initialData, setInitialData] = useState([]); // Store original fetched data
  const [data, setData] = useState([]); // Filtered data
  
  useEffect(() => {
    fetch('http://localhost:400/allproducts')
      .then((response) => response.json())
      .then((fetchedData) => {
        setInitialData(fetchedData);  // Set both states
        setData(fetchedData);         // Set initial state to display all products
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to ensure this runs once after the component mounts

  const [searchfield, setSearchfield] = useState('');
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleProductRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handleProductSelect = (productProps) => {
    setSelectedProduct(productProps);
    console.log(productProps);
  };

  // Updated clickCategory function
  const clickCategory = (selectedCategory) => {
    if (selectedCategory === null) {
      setData(initialData);  // Reset to original data if category is null
    } else {
      const filteredData = initialData.filter(
        (item) =>
          item.category === selectedCategory ||
          item.color === selectedCategory ||
          item.new_price === selectedCategory
      );
      setData(filteredData);
    }
  };

  const priceRange = (min, max) => {
    const filteredData = initialData.filter((item) => {
      const price = parseFloat(item.newPrice);
      return price >= min && price <= max;
    });
    setData(filteredData);
  };

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <Router>
      <div>
        <Navigation searchChange={onSearchChange} clickCategory={clickCategory} priceRange={priceRange} />
        <Routes>
          <Route path="/" element={<Home clickCategory={clickCategory} />} />
          <Route path="/store" element={<ProductList data={filteredData} onSelect={handleProductSelect} />} />
          <Route path="/selectedProduct" element={<Cart selectedProduct={selectedProduct} onAddToCart={handleAddToCart} />} />
          <Route path="/carts" element={<AddedCart addedProducts={cart} onProductRemove={handleProductRemove} />} />
          <Route path="/service" element={<Service />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
