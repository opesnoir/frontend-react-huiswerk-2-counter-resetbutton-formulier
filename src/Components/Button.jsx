import React from 'react';

const Button = ({type, className, clickHandler, children}) => {
    return (
        <>
        <button
            type={type}
            className={className}
            onClick={clickHandler}
        >
            {children}
        </button>
        </>
    );
};

export default Button;