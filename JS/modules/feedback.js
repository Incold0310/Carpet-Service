import form_call from './differentForms.js';
import sendMessageOnEmail from './forEmail.js';

let inputs;

function choiceForm(event) {
  let button = event.target.closest('#btnGroupInFeedback button');
  if (!button) return;
  switch (button.children[0].textContent) {
    case 'ЗАКАЗАТЬ ЗВОНОК':
        inputs = form_call;
        pushInputs(inputs, button.children[0].textContent);
      break;
    case 'ПОЛУЧИТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ':
        pushInputs(inputs, button.children[0].textContent);
      break;
    case 'ЗАКЛЮЧИТЬ ДОГОВОР НА АРЕНДУ КОВРОВ':
        pushInputs(inputs, button.children[0].textContent);
      break;
    }
  }

function pushInputs(inputs, h3) {
  document.querySelector('#btnGroupInFeedback').style.display="none";
  document.querySelector('#feedback h3').textContent = h3;
  let form = `<form name="emailForm" method="post">
    ${inputs}
    <br />
    <button type="submit" class="btn btn-lg btn-outline-success" id="submitRequest">Отправить</button>
  </form>`;
  document.querySelector('#feedback div').insertAdjacentHTML('afterbegin', form);
  document.querySelector('#submitRequest').addEventListener("click", checkRequiredField);
}

function checkRequiredField(event) {
	let check = true;
	let requiredFields = Array.from(document.querySelectorAll('.requiredField + input')).forEach( (input) => {
		if (!input.value) {
			check = false;
			input.classList.add('needValidation');
		}
	});
	if (!check) event.preventDefault();
	else sendMessageOnEmail(event);
}

export default choiceForm;
