// import React from 'react';

import Four from "../four/Four";

const Three = ({asset}) => {
    return (
        <div>
            <h1>three:{asset}</h1>
            <Four asset={asset}></Four>
        </div>
    );
};

export default Three;