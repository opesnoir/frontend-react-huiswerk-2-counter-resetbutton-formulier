//STAPPENPLAN PSEUDO CODE
// !! componenten schrijf je altijd met hoofdletters, dus <Button> ipv <button>
// 1. twee buttons maken, een met de naam +1 en de ander met de naam -1 (met type, className en onClick event)
// normale manier (eerst deze manier, dan pas component maken om er zeker van te zijn dat je niks vergeet):
// function App() {
//    return (
//        <>
//            <h1>Fruitmand bezorgservice</h1>
//            <Button
//                  type="button"
//                  className="btn"
//                  onClick={console.log('+1')}>
//                          Button + 1
//            </Button>
//            <Button
//                  type="button"
//                  className="btn"
//                  onClick={console.log ('-1')}
//            >
//                          Button - 1
//             </Button>
//        </>
//    );
//}
//export default App;
// Overige opmerkingen:
// onClick zegt laat de button een bepaalde code of string doen op basis van een click op dit button element. Het stuk onClick kan je omschrijven:
// van: //      onClick={console.log ('-1)}>
// naar:      onClick= { () => {console.log ('-1')}}>
// of
// naar:     onClick= { function () { console.log ('-1')}}
// hierdoor begint de onClick pas als er geklikt wordt ipv direct.

// 2. van losse elementen naar functie die je kan injecteren (anonieme callback functie versus gewone functie schrijven);
// Gewone functie:
// function App() {
//    return (
//function addOne(){
//      console.log('+1')
//}
//        <>
//            <h1>Fruitmand bezorgservice</h1>
//            <Button
//                  type="button"
//                  className="btn"
//                  onClick={addOne}
//             >
//                          Button + 1
//            </Button>
//
//
// Anonieme functie met als argument een parameter: 'param'
// function App() {
//    return (
//function addOne(){
//      console.log(param)
//}
//        <>
//            <h1>Fruitmand bezorgservice</h1>
//            <Button
//                  type="button"
//                  className="btn"
//                  onClick={() => addOne (param: '+1'}
//             >
//                          Button + 1
//            </Button>

// 3. button ombouwen tot button component, met children;
// a. maak in je src folder een Componenten map aan;
// b. plaatst in de Componenten map een Button map (allemaal met hoofdletters omdat het components betreft;
// c. plaats in de Button map een jsx en css document;
// d. ga naar de jsx map en voeg een component toe met de sneltoets: rsc > tab;
// e. haal je button-code uit het Apps.js bestand en plaats het in de functie op de plek waar eerst de <div> en </div> stond;
// f. aan je button componenten kenmerken mee geven, dit zijn de 'childeren van het component zijn (je noemt ze altijd children).
//    je geeft children mee tussen de openings en de closingtag mee, dus <button>CHILDEREN PLAATS JE HIER</button>als;
// g. code:
// in het document Button.jsx:
//in het Button.jsx document:
/*import React from 'react';

const Button = ( { type, className, children } ) => {
    return (
        <button
        type={ type }
        className={ className }
        >

       {children} // als je een ander woord dan childeren gebruikt, moet je dat ook boven aanpassen

        </button>
    );
};
export default Button;*/
//    in het Apps.js document:
/*<>
    <Button
        type="button"
        className="btn"
        >
        childeren="verzenden"
    </Button>
</>*/

// 4. callback properties doorgeven aan het component om hem herbruikbaar te maken;
// in het document Button.jsx:
/*const Button = ( { type, className, clickHandler, children } ) => {
    return (
        <button
            type={ type }
            className={ className }
            onClick={clickHandler}
        >
                 {children}
        </button>
    );
};
export default Button;*/
//    in het Apps.js document:
/*
    function App () {
        function addOne (){
        console.log('+1')}

        function subtractOne (){
        console.log('-1')}

    return(
    <>
        <button
            type="button"
            className="btn"
            clickHandler={ addOne } // je geeft hier de functie addOne mee als callback en de clickHandler heb je als onClick waarde meegegeven in het Button.jsx document
            >
            + 1
        </button>

        <button
            type="button"
            className="btn"
            clickHandler={ subtractOne } // je geeft hier de functie subtractOne mee als callback
            >
            - 1
        </button>
    </>
    );
 }*/

// 5. state en een plek om deze te tonen aanmaken;
//      a. state maak je altijd bovenin een pagina of binnen een component aan.
//      b. state ontvangt altijd 2 waarden: 1. de naam van de variable en hij draagt ook de naam van de variabele 2. de setter (dit is de waarde die je toekent aan de desbetreffende variabele. de 2e waarde noem je altijd setCount of toggleCount (toggle = tegenovergestelde waarde, denk aan optie a vs optie b of dag vs nachtmodus etc.)
//      c. syntax setState() of toggleState () afhankelijk van je doel;
//      d. syntax state gebruiken is: useState (), in de () plaats je de initiele waarde, bij een counter bijv. 0. De initiele waarde kan van alles zijn: een string een array etc. state code:
//App.jsx code:
/*function App () {
const [count, setCount] = useState (0) // bovenaan state initieren

return (
    <>
        <p> Counter is: <strong> { count }</strong></p>
        <button>...</button>
    </>
);
}*/
//App.jsx code met setCount ()
/*Nu kan je de state code setCount () gebruiken in je functie:
function App () {
    function addOne (){
       setCount('+1')}

    function subtractOne (){
        setCount('-1')}

    return(
        <>
            <button
                type="button"
                className="btn"
                clickHandler={ addOne }
            >
                + 1
            </button>*/

// 6. conditioneel renderen
// Om iets conditioneel te renderen plaats je het tussen accolades {}
//Toggle pakt de huidige waarde (bijv false) en met toggle wordt de huidige waarde geinvert (naar true). Dus toggle zegt wat is de huidige waarde, keer (toggle) die waarde om. Dat doe je door te klikken op onClick, dat is waar je toggle plaatst.
/*App.jsx code met toggle op basis van je state conditioneel renderen:
function App () {
const [darkMode, toggleDarkMode ] = useState (false) // false is de initiele waarde

function toggleTheme (){
    toggleDarkMode (darkMode => !darkMode)
}

return (
    <>
        {darkMode === true? <p> Dark Mode Enabled</p> : <p> Light Mode Enabled</p>} // hier ben je conditioneel aan het renderen, tussen de {} en de : zegt als het eerste deel niet waar is, dan mag je dit doen. Je mag deze code ook zo schrijven:  {darkMode ? <p> Dark Mode Enabled</p> : <p> Light Mode Enabled</p>}.
        <Button
        type="button"
        className="btn"
        clickHandler={ toggleTheme }>
            Toggle Theme
        </Button>
    </>
);
}*/

// 7. stateful components.

