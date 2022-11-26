import React from 'react';
import './App.css';
import Formulier from "./Components/Formulier/Formulier";
import Fruitcounter from "./Components/Fruitcounter/Fruitcounter";
import Fruitcounterbutton from "./Components/Fruitcounter/Fruitcounterbutton";

//STAPPENPLAN
// 1. button maken (met type, className en onClick event)
// 2. anonieme functie versus gewone functie schrijven;
// 3. argument meegeven aan je functie;
// 4. button ombouwen tot button component, met childeren;
// 5. callback properties doorgeven aan het component;
// 6. state en een plek om deze te tonen aanmaken;
// 7. conditioneel renderen
// 8. stateful components.

//1. state
//2. formulier
//3. componenten
//4. logo en styling

function App() {

    return (
        <>
            <div className="containerForm">
                <Formulier
                    formulierTitle="Formulier"
                    firstName="Voornaam"
                    lastName="Achternaam"
                    ageNumber="Leeftijd"
                    ageNumberPlaceholder={0}
                    postcode="Postcode"
                    postcodePlaceholder="4 cijfers en 2 letters"
                    deliveranceFrequency="Bezorg frequentie"
                    weekly="Iedere week"
                    biWeekly="Om de week"
                    monthly="Iedere maand"
                    deliveryMomentDay="Overdag"
                    deliveryMomentNight="'s Avonds"
                    remark="Opmerking"
                    agreementCheckBox="Ik ga akkoord met de voorwaarden"
                    sendButton="Verzend"
                />
            </div>
            <br/>
            <div className="containerFruitCounter">
                <Fruitcounter
                    emoji="🍓"
                    fruitType="Aardbeien"
                    buttonAdd="+1"
                    amount={0}
                    buttonSubtract="-1"
                />
                <br/>
                <Fruitcounter
                    emoji="🍌"
                    fruitType="Bananen"
                    buttonAdd="+1"
                    amount={0}
                    buttonSubtract="-1"
                />
                <br/>
                <Fruitcounter
                    emoji="🍏"
                    fruitType="Appels"
                    buttonAdd="+1"
                    amount={0}
                    buttonSubtract="-1"
                />
                <br/>
                <Fruitcounter
                    emoji="🥝"
                    fruitType="Kiwi's"
                    buttonAdd="+1"
                    amount={0}
                    buttonSubtract="-1"
                />
                <br/>
                <Fruitcounterbutton
                    resetButton="Reset"
                />
            </div>
        </>
    );
}

export default App;


