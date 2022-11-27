import React, {useState} from 'react';

function Fruitcounter({emoji, fruitType, buttonAdd, buttonMinus, buttonReset}) {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <div>
                <fieldset className="fruitCounterItems">
                    <div className="itemsCounter">
                        <p className="fruitName">{emoji}{fruitType}</p>
                        <button
                            className="buttonAddOne"
                            onClick={() => setCounter(counter + 1)}>
                            {buttonAdd}
                        </button>
                        <p> {counter}  </p>
                        <button
                            disabled={counter === 0}
                            className="buttonMinusOne"
                            onClick={() => setCounter(counter - 1)}>
                            {buttonMinus}
                        </button>
                    </div>
                </fieldset>
                <button
                    className="resetButton"
                    onClick={() => (setCounter(0))}>
                    {buttonReset}
                </button>

            </div>
        </>
    );
}

export default Fruitcounter;
