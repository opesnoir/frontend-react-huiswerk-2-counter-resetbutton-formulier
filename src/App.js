import React from 'react';
import './App.css';



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

  return (
    <>
      <div className="formulier-persoonsgegevens-container">
        <form action="">
          <fieldset>
            <label htmlFor="input-firstname" className="item">Voornaam
              <input type="text" name="username" id="input-firstname">
            </label>
            <br>
              <label htmlFor="input-lastname">Achternaam
                <input type="text" name="username" id="input-lastname">
              </label>
              <br>
                <label htmlFor="user-age-number">Leeftijd<input type="number" placeholder="0" name="user-age"
                                                                id="user-age-number">
                </label>
                <br>
                  <label htmlFor="postcode">Postcode</label>
                  <input type="text" pattern="[0-9]{4} && [A-Z]{2}" id="postcode">
                    <!-- <input type="number" id="postcode" class="postcode" pattern="[0-9]{4}" placeholder="4 cijfers">
                     <input type="text" id="postcode" class="postcode" pattern="[A-Z]{2}" placeholder="2 letters">-->
                    <br>
                      <label htmlFor="deliverance-frequency">Bezorgfrequentie</label>
                      <select name="deliverance-frequency" id="deliverance-frequency">
                        <option value="weekly">Iedere week</option>
                        <option value="bi-weekly">Om de week</option>
                        <option value="monthly">Iedere maand</option>
                      </select>
                      <br>
                        <label htmlFor="delivery-moment-dag" && label htmlFor="delivery-moment-avond"></label>
                        <input type="radio" name="moment" id="delivery-moment-dag" checked> Overdag </input>
                        <input type="radio" name="moment" id="delivery-moment-avond"> 's Avonds </input>
                        <!--  <input type="radio" name="delivery-moment" value="day" checked>Overdag</input>
                          <input type="radio" name="delivery-moment" value="night">'s Avonds</input>-->
                        <br>
                          <label htmlFor="remarks">Opmerking</label>
                          <textarea name="remark-textbox-area" id="remarks" cols="30" rows="10"></textarea>
                          <!-- <input type="text" name="remark-textbox" id="remarks">-->
                          <br>
                            <input type="checkbox" name="agreement-check-box" id="agreement-check-box">
                              <label htmlFor="agreement-check-box">Ik ga akkoord met de voorwaarden</label>

                              <br>
                                <button type="submit">Verzend</button>
          </fieldset>
        </form>
      </div>

</>
  );
}

export default App;


