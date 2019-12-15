function sendMessageOnEmail(event) {
  event.preventDefault();
  $('#modalProgress').modal('show');
  let formData = document.forms["emailForm"];
  let userName = formData.elements["Name"].value;
  let userPhone = formData.elements["Phone"].value;
  let userEmail = formData.elements["Email"].value;
  let userMessage = formData.elements["Message"].value;

  let xhr = new XMLHttpRequest();
  xhr.open("POST","./Email/email.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(`userName=${userName}&userPhone=${userPhone}&userEmail=${userEmail}&userMessage=${userMessage}`);
  xhr.onload = () => {
  	$('#modalProgress').modal('hide');
  	if (xhr.status == 200) {
  		document.querySelector('#modalSending .modal-body i').className="fa fa-check-circle";
  		document.querySelector('#modalSending .modal-body i').style.color="green";
  		document.querySelector('#modalSending .modal-body p').textContent="Заявка успешно отправлена";
  		$('#modalSending').modal('show');
  	}
  	else {
  		document.querySelector('#modalSending .modal-body i').className="fa fa-times-circle";
  		document.querySelector('#modalSending .modal-body i').style.color="red";
  		document.querySelector('#modalSending .modal-body p').textContent="Ошибка! Заявка не отправлена";
  		$('#modalSending').modal('show');
  	}
  }
}

export default sendMessageOnEmail;
