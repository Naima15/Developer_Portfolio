import React from 'react';
import './Developer.css'

const Developer = (props) => {
     const { imgURL, name, title, hourlyRate, address, skills } = props.developer;
     const addToTeamHandler = props.addToTeamHandler;
     return (
          <div className="developer card">
               <div className="card-head">
                    <div className="img-wrapper">
                         <img src={imgURL} alt="" />
                    </div>
                    <h3 className="name">{name}</h3>
               </div>
               <div className="card-body">
                    <div className="title">{title}</div>
                    <div className="address">From {address}</div>
                    
                    <div className="hourly-rate">${hourlyRate}/hr</div>
                    <div className="skill">Skills: {skills}</div>
                    <button
                         className="card-btn"
                         onClick={()=> addToTeamHandler(props.developer)}
                    ><i className="fas fa-user-plus"></i> Add To Team</button>
               </div>
          </div>
     );
};

export default Developer;