import * as form from './differentForms.js';

let inputs;

function choiceForm(event) {
  let button = event.target.closest('#btnGroupInFeedback button');
  if (!button) return;
  event.currentTarget.style.display="none";
  switch (button.children[0].textContent) {
    case 'ЗАКАЗАТЬ ЗВОНОК':
        inputs = form.form_call;
        pushInputs(inputs, button.children[0].textContent);
        document.querySelector('#submitButton').style.display='block';
      break;
    case 'ПОЛУЧИТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ':
        inputs = form.form_commercial;
        pushInputs(inputs, button.children[0].textContent);
        document.querySelector('#submitButton').style.display='block';
        document.querySelector('#addCarpet').addEventListener('click', (event)=>{
          event.preventDefault();
          document.querySelector('#selectedCarpets').insertAdjacentHTML('beforebegin', form.addFields);
        });
      break;
    case 'ЗАКЛЮЧИТЬ ДОГОВОР НА АРЕНДУ КОВРОВ':
        inputs = form.form_contractFile;
        pushInputs(inputs, button.children[0].textContent);
        document.querySelector('#reqFile input').addEventListener('change', (event)=>{
          let file = event.currentTarget.value;
          file = file.replace(/\\/g, '/').split('/').pop();
          document.querySelector('#fileName').innerHTML = file;
          document.querySelector('#manualReq').remove();
          document.querySelector('#submitButton').style.display='block';
        });
        document.querySelector('#manualReq').addEventListener('click', ()=>{
          document.querySelector('#feedback form div').remove();
          inputs = form.form_contractFirst;
          pushInputs(inputs, button.children[0].textContent);
          document.querySelector('#pageNext button').addEventListener('click', (event)=> {
            if (checkRequiredField(event)) changePage(event);
            else return;
          });
        });
      break;
    }
  }

function pushInputs(inputs, header) {
  document.querySelector('#feedback h3').textContent = header;
  document.querySelector('#feedback form').insertAdjacentHTML('afterbegin', inputs);
}

function changePage(event) {
  const header = 'ЗАКЛЮЧИТЬ ДОГОВОР НА АРЕНДУ КОВРОВ';
  inputs = form.form_contractSecond;
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
  document.querySelector('#feedback form div').remove();
  document.querySelector('#btnGroupInFeedback').style.display="block";
  event.currentTarget.style.visibility="hidden";
  document.querySelector('#feedback h3').textContent='Обратная связь';
  document.querySelector('#submitButton').style.display='none';
}

export {choiceForm, checkRequiredField, returnToChoiceForm};
