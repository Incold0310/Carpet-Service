import clickOnMenuItem from './modules/clickOnMenuItem.js';
import setValueInTd from './modules/setValueInCalcColumns.js';
import {changeColOfCarpets, changePeriod_manualInput} from './modules/calculator.js';
import {choiceForm, checkRequiredField, returnToChoiceForm} from './modules/feedback.js';
import sendMessageOnEmail from './modules/forEmail.js';
import './style.css';

setValueInTd();

document.querySelector('#menu ul').addEventListener("click", clickOnMenuItem);

document.querySelector('#menu button').addEventListener("click", () => {
  document.querySelector('#feedback').scrollIntoView({
    block: "center",
    inline: "center",
    behavior: "smooth"
  });
});

document.querySelector('#showCalculator').addEventListener('click', ()=>{
  document.querySelector('#calculator').style.animation='showCalc 1s 1 linear';
  document.querySelector('#calculator').style.animationFillMode='forwards';
});

document.querySelector('#closeCalc').addEventListener('click', ()=>{
  document.querySelector('#calculator').style.animation='hiddenCalc 1s 1 linear';
  document.querySelector('#calculator').style.animationFillMode='forwards';
});

document.querySelector('#calculator .row .col-7').addEventListener('click', changeColOfCarpets);

document.querySelector('#calculator .row .col-7').addEventListener('change', changePeriod_manualInput);

document.querySelector('#btnGroupInFeedback').addEventListener('click', (event)=>{
  if (!event.target.closest('button')) return;
  choiceForm(event);
  document.querySelector('#feedback h3 + button').style.visibility="visible";
});

document.querySelector('#feedback h3 + button').addEventListener('click', returnToChoiceForm);

document.querySelector('#submitButton button').addEventListener('click', (event)=> {
  if (checkRequiredField(event)) sendMessageOnEmail(event);
  else return;
  returnToChoiceForm();
});
