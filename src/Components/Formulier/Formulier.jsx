//1. React importeren met: import React from 'react';
//2. formulier maken: rsc > tab;
//3. formulier template maken;
//3. vragen waarom <label htmlFor="postcode">{postcode}</label> <input type="text" id="postcode" pattern="[0-9]{4} && [A-Z]{2}" placeholder={postcodePlaceholder}/> niet werkt.
//      hij geeft als foutmelding: insert requested input type, dat doe ik 4 cijfers en 2 letters;
//      de alternatieve optie werkte ook niet:   <input type="number" id="postcode" class="postcode" pattern="[0-9]{4}" placeholder="4 cijfers">
//        <input type="text" id="postcode" class="postcode" pattern="[A-Z]{2}" placeholder="2 letters">
//       <br>
//5. vragen of de kinderen nesten wel klopt, het lukt namelijk niet.
//6. vragen of het normaal is dat de code zo lang is.

import React from 'react';
import styles from "./Formulier.module.css";



function Formulier({
                       formulierTitle,
                       firstName,
                       lastName,
                       ageNumber,
                       ageNumberPlaceholder,
                       postcode,
                       postcodePlaceholder,
                       deliveranceFrequency,
                       weekly,
                       biWeekly,
                       monthly,
                       deliveryMomentDay,
                       deliveryMomentNight,
                       remark,
                       agreementCheckBox,
                       sendButton
                   }) {

    return (
        <>
            <div>
                <form className={styles["innerContainerFormulier"]}>
                    <h3 className="itemForm">{formulierTitle}</h3>
                    <label htmlFor="firstName"> {firstName} </label>
                    <input type="text" name="userFirstName" id="firstName"/>
                    <br/>
                    <label htmlFor="lastName"> {lastName} </label>
                    <input type="text" name="userLastName" id="lastName"/>
                    <br/>
                    <label htmlFor="ageNumber">{ageNumber}</label>
                    <input type="number" min={0} placeholder={ageNumberPlaceholder} name="userAge" id="ageNumber"/>
                    <br/>
                    <label htmlFor="postcode">{postcode}</label>
                    <input type="text" id="postcode" pattern="[0-9]{4} && [A-Z]{2}" placeholder={postcodePlaceholder}/>
                    <br/>
                    <label htmlFor="deliveranceFrequency">{deliveranceFrequency}</label>
                    <select name="optionDeliveranceFrequency" id="deliveranceFrequency">
                        <option value="weekly">{weekly}</option>
                        <option value="biWeekly">{biWeekly}</option>
                        <option value="monthly">{monthly}</option>
                    </select>
                    <br/>
                    <div className="deliveryMoment">
                        <label htmlFor="deliveryMomentDay">{deliveryMomentDay}</label>
                        <input type="radio" name="moment" id="deliveryMomentDay" checked/>
                        <label htmlFor="deliveryMomentNight">{deliveryMomentNight}</label>
                        <input type="radio" name="moment" id="deliveryMomentNight"/>
                    </div>
                    <br/>
                    <label htmlFor="remarks">{remark}</label>
                    <textarea name="remarkArea" id="remarks" cols="30" rows="10"></textarea>
                    <br/>
                    <input type="checkbox" name="agreementBox" id="agreementCheckBox"/>
                    <label htmlFor="agreementCheckBox">{agreementCheckBox}</label>
                    <br/>
                    <button type="submit">{sendButton}</button>
                </form>
            </div>
        </>
    );
}

export default Formulier;


