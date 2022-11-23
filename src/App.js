import React from 'react';
import './App.css';
import '../src/Components/Button'

//STAPPENPLAN
// 1. button maken (met type, className en onClick event)
// 2. anonieme functie versus gewone functie schrijven;
// 3. argument meegeven aan je functie;
// 4. button ombouwen tot button component, met childeren;
// 5. callback properties doorgeven aan het component;
// 6. state en een plek om deze te tonen aanmaken;
// 7. conditioneel renderen
// 8. stateful components.


function App() {

    function addOne() {
        console.log('+1')
    }

    function subtractOne(){
        console.log('-1')
    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
    <span>
      <button
          type="button"
          className="btn"
          onClick= {addOne}
      >
          + 1
      </button>
        <button
            type="button"
            className="btn"
            onClick= {subtractOne}
        >
            - 1
        </button>
</span>




    </>
  );
}

export default App;


