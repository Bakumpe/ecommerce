import React from "react";
import Cart from "../assets/cart.png";

function Header(handleAddToCart) {
  return (
    <>
      <nav>
        <div className="header">
          <h2>E-Commerce Products Page</h2>
        </div>

        <div className="categories">
          <p>Electronics And Appliances</p>
          <p>Personal Care & Hygiene</p>
          <p>Food and Beverages</p>
          <p>Combos</p>
          <input type="text" placeholder="Search" />
          <div className="cartDiv">
            <img src={Cart} alt="Cart" className="cart" />
            
                <p>2</p>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
