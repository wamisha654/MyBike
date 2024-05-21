import React, { useState } from 'react';
import './App.css';
import SignIn from './SignIn/SignIn.js';
import Appointment from './Service/Appointment.js';
import Navigation from './Navigation/Navigation.js';
import ProductList from './Product/ProductList.js';
import Footer from './Footer/Footer.js';
import initialData from './Data/Data.js'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home.js'; 
import Service from './Service/Service.js'; 
import Cart from './Product/Cart/Cart.js'; 
import AddedCart from './Product/AddedCart/AddedCart.js';

const App = () => {
  const [data, setData] = useState(initialData); // Rename the state variable
  const [searchfield, setSearchfield] = useState('');
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };


  const handleProductRemove = (index) =>{
    const updatedCart = [...cart];
    updatedCart.splice(index,1);
    setCart(updatedCart)
  }
  
  const handleProductSelect = (productProps) => {
    setSelectedProduct(productProps); 
    console.log(productProps);


  };

  const clickCategory = (selectedCategory) => {
  let filterData = initialData; 
  if (selectedCategory !== null) {
    filterData = initialData.filter((item) => item.category === selectedCategory || item.color === selectedCategory || item.newPrice === selectedCategory );
  }
  setData(filterData);
  setCategory(selectedCategory);
};


  const priceRange = (min,max)=>{
    let filterData = initialData;
    filterData = initialData.filter((item)=>{
      const price = parseFloat(item.newPrice);
      return price >= min && price <= max;
    })
    setData(filterData)
  }

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filterData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchfield.toLowerCase());
  });

  return ( 
    // <div>
      
      
      
    //   {/*<SignIn />
    //   <Appointment />*/}
    // </div>
    <Router>
      <div>
        <Navigation searchChange={onSearchChange} clickCategory={clickCategory} priceRange={priceRange}/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<ProductList data={filterData} onSelect={handleProductSelect}/>} />
          <Route path="/selectedProduct" element={<Cart selectedProduct={selectedProduct} onAddToCart={handleAddToCart} />} />
          <Route path="/carts" element={<AddedCart addedProducts={cart} onProductRemove={handleProductRemove} />} />
          <Route path="/service" element={<Service />} />
          {/*<Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Sidebar />} />*/}
        </Routes>
        
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
