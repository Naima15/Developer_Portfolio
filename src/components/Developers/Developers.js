import React from 'react';
import Developer from '../Developer/Developer';
import './Developers.css'

const Developers = (props) => {
     const developers = props.developers;
     return (
          <div className="developers">
               {
                    developers.map(developer => <Developer
                         addToTeamHandler={props.addToTeamHandler}
                         developer={developer}
                         key={developer.id}
                    ></Developer>)
               }
          </div>
     );
};

export default Developers;