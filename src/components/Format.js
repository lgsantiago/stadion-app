import React from 'react';

const Format = ( {rounds, type} ) => 
    <div id="format">
        <h3>{rounds} {rounds && `rounds`} {type}</h3>
    </div>

export default Format