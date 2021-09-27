import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Developers from '../Developers/Developers';
import './Hiringsection.css'

const Hiringsection = () => {
     const [developers, setDevelopers] = useState([]);
     const [cart, setCart] = useState([]);
     const [displayDev, setDisplayDev] = useState([])
     useEffect(() => {
          fetch('./fakedata.JSON')
               .then(res => res.json())
               .then(data => {
                    setDevelopers(data);
                    setDisplayDev(data);
               })
     }, [])

     const handleSearch = (e) => {
          const searchText = e.target.value;
          const matchedDevs = developers.filter(developer => developer.title.toLowerCase().includes(searchText.toLowerCase()));
          setDisplayDev(matchedDevs)
     }
     const addToTeamHandler = (dev) => {
          if(!cart.includes(dev)){
               setCart([...cart, dev]);
          }
     }
     return (
          <main>
               <div className="container">
                    <div className="header-content">
                         <h2>Find and add quality developers to your team for your next project within $700 Hourly Rate</h2>
                         <div className="search-wrapper">
                              <input
                                   type="search"
                                   onChange={handleSearch}
                                   placeholder="Search your Developer" />
                         </div>
                    </div>
               </div>
               <div className="container hiring-section">
                    <Developers developers={displayDev} addToTeamHandler={addToTeamHandler}></Developers>
                    <Cart cart={cart}></Cart>
               </div>
          </main>
     );
};

export default Hiringsection;