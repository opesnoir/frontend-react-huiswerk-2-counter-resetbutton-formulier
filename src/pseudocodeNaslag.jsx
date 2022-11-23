//STAPPENPLAN PSEUDO CODE

// 1. twee buttons maken, een met de naam +1 en de ander met de naam -1 (met type, className en onClick event)
// normale manier (eerst deze manier, dan pas component maken om er zeker van te zijn dat je niks vergeet):
//     <button
//      type="button"
//      className="btn"
//      onClick={console.log('+1)}>
//     Button + 1
//     </button>
//     <button
//      type="button"
//      className="btn"
//      onClick={console.log ('-1)}>
//     Button - 1
//     </button>
// onClick zegt laat de button een bepaalde code of string doen op basis van een click op dit button element.

// 2. anonieme functie versus gewone functie schrijven;
// van: //      onClick={console.log ('-1)}>
// naar:      onClick= { () => {console.log ('-1')}}>
// of
// naar:     onClick= { function () { console.log ('-1')}}
// beide doen hetzelfde, ze zijn qua schrijfwijze anders.

// 3. argument meegeven aan je functie;
// 4. button ombouwen tot button component, met childeren;
// 5. callback properties doorgeven aan het component;
// 6. state en een plek om deze te tonen aanmaken;
// 7. conditioneel renderen
// 8. stateful components.

