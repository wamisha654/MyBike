import React, { useState } from 'react';
import Product from './Product.js';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.js';

const ProductList = ({ data, onSelect, clickCategory, priceRange}) => {
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);
 
  const toggleFilterSidebar = () => {
    setShowFilterSidebar(!showFilterSidebar);
  };
  const handleCategoryClick = (category) => {
        clickCategory(category);
    }

  const AllProducts = data.map((pro, i) => {
    return (
      <Link key={i} to={`/selectedProduct/`}>
        <Product
          name={pro.name}
          image={pro.image}
          old_price={pro.old_price}
          new_price={pro.new_price}
          star={pro.star}
          onSelect={onSelect}
          description={pro.description}
          id={pro.id}
        />
      </Link>
    );
  });
  return <div>
           <ul className="Ulists">
            <li>
            <Link  className="link dim gray f6 f5-ns mr5"  title="category">/Category/</Link>
            <ul id="submenu">
              <li><a className="link black  f6 f5-ns mr5" href="#" title="About" onClick={() => handleCategoryClick("City")}>City bikes</a></li>
              <li><a className="link black  f6 f5-ns mr5" href="#" title="About" onClick={() => handleCategoryClick("Road")}>Road bikes</a></li>
              <li><a className="link black  f6 f5-ns mr5" href="#" title="About" onClick={() => handleCategoryClick("Children")}>Cross bikes</a></li>
              <li><a className="link black  f6 f5-ns mr5" href="#" title="About" onClick={() => handleCategoryClick("Mountain")}>Road bikes</a></li>
            </ul>
           </li>
           <li><Link  className="link dim gray f6 f5-ns mr5"  onClick={toggleFilterSidebar} title="Filter">/Filter/</Link></li>
           </ul>
           
           <div className="ProductList">{AllProducts}</div>;
           {showFilterSidebar && <Sidebar toggleFilterSidebar={toggleFilterSidebar} clickCategory={clickCategory} priceRange={priceRange}/>}
         </div>
};
export default ProductList;
