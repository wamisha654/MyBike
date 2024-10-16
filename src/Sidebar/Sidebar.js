import React from 'react';
import './Sidebar.css';
import { IoClose } from "react-icons/io5";


const Sidebar = ({toggleFilterSidebar,clickCategory, priceRange}) =>{
	const handleCategoryClick = (color) => {
        clickCategory(color);
    }
    const handlePrice = (min,max) =>{
       priceRange(min,max);
    }
	return(
     <div className ="sidebar">
      <div className="close-side"><a onClick={toggleFilterSidebar}><IoClose /></a></div>
      <div>
      	<h2 className = "sidebar-title"> Price </h2>
              
              <label className = "sidebar-label-container">
                <input type = "radio"  name = "rad" onClick={()=> handlePrice(0,10000)}/>
                <span className = "checkmark"></span>All

              </label>
              <label className = "sidebar-label-container">
                <input type = "radio"  name = "rad" onClick={()=> handlePrice(1000,2000)}/>
                <span className = "checkmark"></span>1000_2000 PLN

               </label>
               
              <label className = "sidebar-label-container">
                <input type = "radio"  name = "rad" onClick={()=> handlePrice(2000,3000)}/>
                <span className = "checkmark"></span>2000_3000 PLN

               </label>
               <label className = "sidebar-label-container">
                <input type = "radio"  name = "rad" onClick={()=> handlePrice(3000,4000)}/>
                <span className = "checkmark"></span>3000_4000 PLN

               </label>
               <label className = "sidebar-label-container">
                <input type = "radio"  name = "rad" onClick={()=> handlePrice(4000,5000)}/>
                <span className = "checkmark"></span>4000_5000 PLN

               </label>
               <label className = "sidebar-label-container">
                <input type = "radio"  name = "rad" onClick={()=> handlePrice(5000,6000)}/>
                <span className = "checkmark"></span>5000_6000 PLN

               </label>
      </div>
      <div>
      	<h2 className = "sidebar-title"> Color </h2>
              
              <label className = "sidebar-label-container">
                <input type = "radio"  name = "rad" onClick={() => handleCategoryClick(null)}/>
                <span className = "checkmark"></span>All

            </label>
              <label className = "sidebar-label-container">
                <input type = "radio"  name = "rad" onClick={() => handleCategoryClick("white")}/>
                <span className = "checkmark"></span>White

             </label>
            <label className = "sidebar-label-container">
                <input type = "radio" name = "rad" onClick={() => handleCategoryClick("black")}/>
                <span className = "checkmark"></span>Black

            </label>
            <label className = "sidebar-label-container">
                <input type = "radio" name = "rad" onClick={() => handleCategoryClick("red")}/>
                <span className = "checkmark"></span>Red

            </label>
            <label className = "sidebar-label-container">
                <input type = "radio"  name = "rad" onClick={() => handleCategoryClick("blue")}/>
                <span className = "checkmark"></span>Blue

            </label>
            <label className = "sidebar-label-container">
                <input type = "radio"  name = "rad" onClick={() => handleCategoryClick("green")}/>
                <span className = "checkmark"></span>Green

            </label>
      </div>
      
     </div>
		)
}
export default Sidebar;