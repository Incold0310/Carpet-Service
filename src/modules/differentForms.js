let form_call = `<div class="form-group">
  <label for="inputName" class="requiredField">Имя</label>
  <input class="form-control" id="inputName" placeholder="Ваше имя" aria-describedby="nameHelpBlock" name="Name">
  <small id="nameHelpBlock" class="form-text text-muted">
      Обязательное поле ввода! Пожалуйста, введите своё имя.
  </small>
  </div>
  <div class="form-group">
    <label for="inputPhone" class="requiredField">Телефон</label>
    <input class="form-control" id="inputPhone" placeholder="Ваш телефон" aria-describedby="phoneHelpBlock" name="Phone">
    <small id="phoneHelpBlock" class="form-text text-muted">
      Обязательное поле ввода! Пожалуйста, введите свой номер телефона.
    </small>
  </div>`;

  export default form_call; 
