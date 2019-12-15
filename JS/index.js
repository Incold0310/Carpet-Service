import clickOnMenuItem from './modules/clickOnMenuItem.js';
import setValueInTd from './modules/setValueInCalcColumns.js';
import {changeColOfCarpets, changePeriod_manualInput} from './modules/calculator.js';
import choiceForm from './modules/feedback.js';

setValueInTd();

document.querySelector('#menu ul').addEventListener("click", clickOnMenuItem);
document.querySelector('#menu button').addEventListener("click", () => {
  document.querySelector('#feedback').scrollIntoView({
    block: "center",
    inline: "center",
    behavior: "smooth"
  });
});

document.querySelector('#calculator .row .col-7').onclick = (event) => {
  changeColOfCarpets(event);
};

document.querySelector('#calculator .row .col-7').onchange = (event) => {
  changePeriod_manualInput(event);
};

document.querySelector('#btnGroupInFeedback').addEventListener('click', choiceForm)
