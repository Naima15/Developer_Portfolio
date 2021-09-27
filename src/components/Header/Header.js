import React from 'react';
import './Header.css'

const Header = () => {
     return (
          <header>
               <nav>
                    <div className="container">
                         <div className="logo">Developers Team</div>
                         <div className="menu">
                              <a href="/your-team">Your Team</a>
                              <a href="/account">Account</a>
                              <a className="logout" href="/logout">Login</a>
                         </div>
                    </div>
               </nav>
          </header>
     );
};

export default Header;