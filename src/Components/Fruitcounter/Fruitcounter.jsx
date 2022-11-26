//1. React importeren met: import React from 'react';
//2. formulier maken: rsc > tab;
//3. formulier template maken;

import React from 'react';

const Fruitcounter = ({emoji, fruitType, buttonAdd, amount, buttonSubtract, resetButton}) => {
    return (
        <>
            <div className="fruitCounterContainer">
                <fieldset>
                    <article className="fruitcounter-content">
                        <p className="fruitname">{emoji}{fruitType}</p>
                        <button>{buttonAdd}</button>
                        <p>{amount}</p>
                        <button>{buttonSubtract}</button>
                    </article>
                </fieldset>
            </div>
        </>
    );
};

export default Fruitcounter;