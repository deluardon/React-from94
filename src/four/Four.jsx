// import React from 'react';

import Five from "../five/Five";

const Four = ({asset}) => {
    return (
        <div>
            <h1>four:{asset}</h1>
            <Five asset={asset}></Five>
        </div>
    );
};

export default Four;