// import React from 'react';

import Two from "../two/Two";

const One = ({asset}) => {
    return (
        <div>
            <h1>one:{asset}</h1>
            <Two asset={asset}></Two>
        </div>
    );
};

export default One;