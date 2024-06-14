// import React from 'react';

import Three from "../three/Three";

const Two = ({asset}) => {
    return (
        <div>
            <h1>two:{asset}</h1>
            <Three asset={asset}></Three>
        </div>
    );
};

export default Two;