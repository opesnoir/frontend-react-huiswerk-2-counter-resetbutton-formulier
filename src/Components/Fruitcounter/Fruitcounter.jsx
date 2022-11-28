import React, {useState} from 'react';
import styles from "./Fruitcounter.module.css";

function Fruitcounter({emoji, fruitType, buttonAdd, buttonMinus, children}) {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <div>
                <fieldset className={styles["fruitCounterItems"]}>
                    <div>
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
                    {children}
                </button>

            </div>
        </>
    );
}

export default Fruitcounter;
