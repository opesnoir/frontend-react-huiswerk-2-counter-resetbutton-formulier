import React from 'react';

const Fruitcounterbutton = ({resetButton}) => {
    return (
        <>
        <div>
            <article className="fruitCounterButton">
                <button className="resetButton" type="reset">{resetButton}</button>
            </article>
        </div>
        </>
    );
};

export default Fruitcounterbutton;