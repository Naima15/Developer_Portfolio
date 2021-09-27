import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
     const totalDevs = cart.length;
     let totalRate = 0;
     for (const dev of cart) {
          totalRate += dev.hourlyRate;
     }
     return (
     <div>
     <div className="cart">
     <div>
          <h2>Team's current status</h2>
          <h3>Total developers: { totalDevs }</h3>
          <div className="cart-details">
          {
          cart.map(singleCart => 
     <div className="card-preview" key={singleCart.id}>
          <div className="card-img">
          <img src={singleCart.imgURL} alt="" />
          </div>
          <div className="preview-name-rate">
          <div className="card-name">
          {singleCart.name}
          </div>
          <div>${singleCart.hourlyRate}</div>
          </div>
          </div>
          )
          }
          </div>
               <h3>Total Hourly Rate: ${totalRate}</h3>
               <button className="cart-btn"><i className="fas fa-envelope"></i> Send Invitation to All</button>
               </div>
          </div>
          </div>
     );
};

export default Cart;