import {form_call, form_contractFirst, form_contractSecond, form_commercial, addFields} from './differentForms.js';

let inputs;

function choiceForm(event) {
  let button = event.target.closest('#btnGroupInFeedback button');
  if (!button) return;
  event.currentTarget.style.display="none";
  switch (button.children[0].textContent) {
    case 'ЗАКАЗАТЬ ЗВОНОК':
        inputs = form_call;
        pushInputs(inputs, button.children[0].textContent);
        document.querySelector('#submitButton').style.display='block';
      break;
    case 'ПОЛУЧИТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ':
        inputs = form_commercial;
        pushInputs(inputs, button.children[0].textContent);
        document.querySelector('#submitButton').style.display='block';
        document.querySelector('#addCarpet').addEventListener('click', (event)=>{
          event.preventDefault();
          document.querySelector('#selectedCarpets').insertAdjacentHTML('beforebegin', addFields);
        });
      break;
    case 'ЗАКЛЮЧИТЬ ДОГОВОР НА АРЕНДУ КОВРОВ':
        inputs = form_contractFirst;
        pushInputs(inputs, button.children[0].textContent);
        document.querySelector('#pageNext').style.display = "block";
      break;
    }
  }

function pushInputs(inputs, header) {
  document.querySelector('#feedback h3').textContent = header;
  document.querySelector('#feedback form').insertAdjacentHTML('afterbegin', inputs);
}

function changePage(event) {
  const header = 'ЗАКЛЮЧИТЬ ДОГОВОР НА АРЕНДУ КОВРОВ';
  event.currentTarget.parentNode.style.display = "none";
  inputs = form_contractSecond;
  document.querySelector('#feedback form div').remove();
  pushInputs(inputs, header);
  document.querySelector('#submitButton').style.display='block';
}

function checkRequiredField(event) {
	let check = true;
	let requiredFields = Array.from(document.querySelectorAll('.requiredField + input , .requiredField + textarea')).forEach( (input) => {
		if (!input.value) {
			check = false;
			input.classList.add('needValidation');
		}
	});
	if (!check) event.preventDefault();
  return check;
}

function returnToChoiceForm(event) {
  if (document.querySelector('#feedback h3').textContent=='ЗАКЛЮЧИТЬ ДОГОВОР НА АРЕНДУ КОВРОВ') {
    document.querySelector('#pageNext').style.display="none";
  }
  document.querySelector('#feedback form div').remove();
  document.querySelector('#btnGroupInFeedback').style.display="block";
  event.currentTarget.style.visibility="hidden";
  document.querySelector('#feedback h3').textContent='Обратная связь';
  document.querySelector('#submitButton').style.display='none';
}

export {choiceForm, changePage, checkRequiredField, returnToChoiceForm};
