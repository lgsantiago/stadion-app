import React from 'react';

const Movements = ( { movements } ) =>  
    <div id="movements" className="movements">
        {movements.map((movement, key) => 
        <li key={key}>
            {movement.reps} {movement.exercise} 
        </li>
        )}
    </div>

export default Movements;