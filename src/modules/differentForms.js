const form_call = `<div>
<div class="form-group">
  <label for="inputName" class="requiredField">Имя</label>
  <input class="form-control" id="inputName" placeholder="Ваше имя" aria-describedby="nameHelpBlock" name="Name">
  <small id="nameHelpBlock" class="form-text text-muted">
      Обязательное поле ввода!
  </small>
  </div>
  <div class="form-group">
    <label for="inputPhone" class="requiredField">Телефон</label>
    <input class="form-control" id="inputPhone" placeholder="Ваш телефон" aria-describedby="phoneHelpBlock" name="Phone">
    <small id="phoneHelpBlock" class="form-text text-muted">
      Обязательное поле ввода!
    </small>
  </div>
</div>`;

const form_contractFirst = `<div>
    <div class="form-group">
      <label for="inputNameCompany" class="requiredField">Наименование организации</label>
      <input class="form-control" id="inputNameCompany" placeholder="Наименование организации" aria-describedby="nameCompanyHelpBlock" name="nameCompany">
      <small id="nameCompanyHelpBlock" class="form-text text-muted">
          Обязательное поле ввода!
      </small>
    </div>
    <div class="form-row">
      <div class="form-group col-4">
        <label for="inputINN" class="requiredField">ИНН</label>
        <input class="form-control" id="inputINN" placeholder="ИНН" aria-describedby="INNHelpBlock" name="INN">
        <small id="INNHelpBlock" class="form-text text-muted">
            Обязательное поле ввода!
        </small>
      </div>
      <div class="form-group col-4">
        <label for="inputKPP" class="requiredField">КПП</label>
        <input class="form-control" id="inputKPP" placeholder="КПП" aria-describedby="KPPHelpBlock" name="KPP">
        <small id="KPPHelpBlock" class="form-text text-muted">
            Обязательное поле ввода!
        </small>
      </div>
      <div class="form-group col-4">
        <label for="inputOGRN" class="requiredField">ОГРН</label>
        <input class="form-control" id="inputOGRN" placeholder="ОГРН" aria-describedby="OGRNHelpBlock" name="INN">
        <small id="OGRNHelpBlock" class="form-text text-muted">
            Обязательное поле ввода!
        </small>
      </div>
    </div>
    <div class="form-group">
      <label for="legalAddressCompany" class="requiredField">Юридический адрес</label>
      <textarea class="form-control" id="inputLegalAddress" placeholder="Юридический адрес" aria-describedby="legalAddressHelpBlock" name="legalAddress" rows="2"></textarea>
      <small id="legalAdressHelpBlock" class="form-text text-muted">
          Обязательное поле ввода!
      </small>
    </div>
    <div class="form-group">
      <label for="factAddressCompany" class="requiredField">Фактический адрес</label>
      <textarea class="form-control" id="inputFactAddress" placeholder="Фактический адрес" aria-describedby="factAddressHelpBlock" name="factAddress" rows="2"></textarea>
      <small id="factAdressHelpBlock" class="form-text text-muted">
          Обязательное поле ввода!
      </small>
    </div>
    </div>
    </div>`;

const form_contractSecond = `<div>
  <div class="form-group">
    <label for="inputKorScore" class="requiredField">Корреспондентский счёт</label>
    <input class="form-control" id="inputKorScore" placeholder="Корреспондентский счёт" aria-describedby="korScoreHelpBlock" name="KPP">
    <small id="korScoreHelpBlock" class="form-text text-muted">
        Обязательное поле ввода!
    </small>
  </div>
  <div class="form-row">
    <div class="form-group col-6">
      <label for="inputBIK" class="requiredField">БИК</label>
      <input class="form-control" id="inputBIK" placeholder="БИК" aria-describedby="BIKHelpBlock" name="BIK">
      <small id="BIKHelpBlock" class="form-text text-muted">
          Обязательное поле ввода!
      </small>
    </div>
    <div class="form-group col-6">
      <label for="inputPayScore" class="requiredField">Расчётный счёт</label>
      <input class="form-control" id="inputPayScore" placeholder="Расчётный счёт" aria-describedby="payScoreHelpBlock" name="payScore">
      <small id="payScoreHelpBlock" class="form-text text-muted">
          Обязательное поле ввода!
      </small>
    </div>
  </div>
  <div class="form-group">
    <label for="inputBankName" class="requiredField">Наименование банка</label>
    <input class="form-control" id="inputBankName" placeholder="Наименование банка" aria-describedby="bankNameHelpBlock" name="KPP">
    <small id="bankNameHelpBlock" class="form-text text-muted">
        Обязательное поле ввода!
    </small>
  </div>
  <div class="form-row">
    <div class="col-12">
      <label class="requiredField">ФИО генерального директора</label>
    </div>
    <div class="form-group col-4">
      <input class="form-control" id="inputDSurname" placeholder="Фамилия" aria-describedby="dSurnameHelpBlock" name="dSurname">
      <small id="dSurnameHelpBlock" class="form-text text-muted">
          Обязательное поле ввода!
      </small>
    </div>
    <div class="form-group col-4">
      <input class="form-control" id="inputdName" placeholder="Имя" aria-describedby="dNameHelpBlock" name="dName">
      <small id="dNameHelpBlock" class="form-text text-muted">
          Обязательное поле ввода!
      </small>
    </div>
    <div class="form-group col-4">
      <input class="form-control" id="inputDPatronymic" placeholder="Отчество" aria-describedby="dPatronymicHelpBlock" name="dPatronymic">
      <small id="dPatronymicHelpBlock" class="form-text text-muted">
          Обязательное поле ввода!
      </small>
    </div>
  </div>
  </div>
`;

const form_commercial = `
  <div>
    <div class="form-row">
      <div class="form-group col-6">
        <label for="inputNameCompany" class="requiredField">Наименование организации</label>
        <input class="form-control" id="inputNameCompany" placeholder="Наименование организации" aria-describedby="nameCompanyHelpBlock" name="nameCompany">
        <small id="nameCompanyHelpBlock" class="form-text text-muted">
            Обязательное поле ввода!
        </small>
      </div>
      <div class="form-group col-6">
        <label for="inputINN" class="requiredField">ИНН</label>
        <input class="form-control" id="inputINN" placeholder="ИНН" aria-describedby="INNHelpBlock" name="INN">
        <small id="INNHelpBlock" class="form-text text-muted">
            Обязательное поле ввода!
        </small>
      </div>
    </div>
    <div>
      <h5>Подбор ковров</h5>
    </div>
    <div id="selectedCarpets">
    <button class="btn" id="addCarpet" style="font-size: 150%;"><i class="fa fa-plus-square" style="color: green;"></i>  Добавить ковёр</button>
    </div>
  </div>
`;

const addFields = `<div class="form-row">
<div class="form-group col-6">
  <label for="selectCarpetSize">Размер ковра</label>
  <select id="selectCarpetSize" class="form-control">
    <option selected>60 &#215; 85</option>
    <option>85 &#215; 150</option>
    <option>115 &#215; 200</option>
    <option>150 &#215; 240</option>
    <option>150 &#215; 300</option>
    <option>115 &#215; 400</option>
  </select>
</div>
<div class="form-group col-2">
  <label for="carpetSize">Количество</label>
  <input class="form-control" id="inputCol" aria-describedby="colHelpBlock" name="col" value="1" onchange="if (!this.value || this.value<1) this.value=1;" type="number">
</div>
<div class="form-group col-4">
<label for="selectPeriod">Период замены</label>
<select id="selectPeriod" class="form-control">
  <option selected>3 раза в неделю</option>
  <option>2 раза в неделю</option>
  <option>1 раза в неделю</option>
  <option>1 раз в 2 недели</option>
</select>
</div>
</div>`;

export {form_call, form_contractFirst, form_contractSecond, form_commercial, addFields};
