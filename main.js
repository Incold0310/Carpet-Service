!function(e){var t={};function l(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=1)}([function(e,t,l){},function(e,t,l){"use strict";l.r(t);let n=document.querySelector(".activeMenuLink");var o=function(e){e.preventDefault();let t=e.target.closest("li");if(!t)return;n.classList.remove("activeMenuLink"),n=t,n.classList.add("activeMenuLink");let l=e.target.getAttribute("href");document.querySelector(l).scrollIntoView({block:"center",inline:"center",behavior:"smooth"})};var r=function(){let e=document.querySelectorAll(".chooseCol"),t=document.querySelectorAll(".choosePer");for(let l=0;l<e.length;l++)t[l].innerHTML='<select class="custom-select">\n\t    \t\t\t\t\t\t\t<option selected>1 раз в 2 недели</option>\n\t   \t\t\t\t\t\t\t\t<option>1 раз в неделю</option>\n\t    \t\t\t\t\t\t\t<option>2 раза в неделю</option>\n\t\t\t\t\t\t\t\t\t\t<option>3 раза в неделю</option>\n\t   \t\t\t\t\t\t\t\t</select>',e[l].innerHTML='<div class="input-group">\n\t  \t\t\t\t\t\t\t\t<div class="input-group-prepend">\n\t   \t\t\t\t\t\t\t\t\t<button class="btn btn-outline-danger" type="button"><i class="fa fa-minus"></i></button>\n\t  \t\t\t\t\t\t\t\t</div><input class="form-control calcInput" value="0" type="number"><div class="input-group-append">\n\t    \t\t\t\t\t\t\t\t<button class="btn btn-outline-success plusValue" type="button"><i class="fa fa-plus"></i></button>\n\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>'};let a=0,c={1:{col:0,price:600,priceList:{"1 раз в 2 недели":600,"1 раз в неделю":540,"2 раза в неделю":480,"3 раза в неделю":480}},2:{col:0,price:600,priceList:{"1 раз в 2 недели":600,"1 раз в неделю":620,"2 раза в неделю":560,"3 раза в неделю":480}},3:{col:0,price:680,priceList:{"1 раз в 2 недели":680,"1 раз в неделю":840,"2 раза в неделю":720,"3 раза в неделю":660}},4:{col:0,price:880,priceList:{"1 раз в 2 недели":880,"1 раз в неделю":1280,"2 раза в неделю":1140,"3 раза в неделю":1040}},5:{col:0,price:1200,priceList:{"1 раз в 2 недели":1200,"1 раз в неделю":1460,"2 раза в неделю":1320,"3 раза в неделю":1160}},6:{col:0,price:1400,priceList:{"1 раз в 2 недели":1400,"1 раз в неделю":1600,"2 раза в неделю":1360,"3 раза в неделю":1200}}};function i(e){for(;"TR"!=e.tagName;)e=e.parentNode;return e}function s(e,t){switch(t){case"plus":a+=e;break;case"minus":a-=e}document.querySelector("#finishPrice span").textContent=a}const d='<div>\n<div class="form-group">\n  <label for="inputName" class="requiredField">Имя</label>\n  <input class="form-control" id="inputName" placeholder="Ваше имя" aria-describedby="nameHelpBlock" name="Name">\n  <small id="nameHelpBlock" class="form-text text-muted">\n      Обязательное поле ввода!\n  </small>\n  </div>\n  <div class="form-group">\n    <label for="inputPhone" class="requiredField">Телефон</label>\n    <input class="form-control" id="inputPhone" placeholder="Ваш телефон" aria-describedby="phoneHelpBlock" name="Phone">\n    <small id="phoneHelpBlock" class="form-text text-muted">\n      Обязательное поле ввода!\n    </small>\n  </div>\n</div>',u='<div>\n    <div class="form-group">\n      <label for="inputNameCompany" class="requiredField">Наименование организации</label>\n      <input class="form-control" id="inputNameCompany" placeholder="Наименование организации" aria-describedby="nameCompanyHelpBlock" name="nameCompany">\n      <small id="nameCompanyHelpBlock" class="form-text text-muted">\n          Обязательное поле ввода!\n      </small>\n    </div>\n    <div class="form-row">\n      <div class="form-group col-4">\n        <label for="inputINN" class="requiredField">ИНН</label>\n        <input class="form-control" id="inputINN" placeholder="ИНН" aria-describedby="INNHelpBlock" name="INN">\n        <small id="INNHelpBlock" class="form-text text-muted">\n            Обязательное поле ввода!\n        </small>\n      </div>\n      <div class="form-group col-4">\n        <label for="inputKPP" class="requiredField">КПП</label>\n        <input class="form-control" id="inputKPP" placeholder="КПП" aria-describedby="KPPHelpBlock" name="KPP">\n        <small id="KPPHelpBlock" class="form-text text-muted">\n            Обязательное поле ввода!\n        </small>\n      </div>\n      <div class="form-group col-4">\n        <label for="inputOGRN" class="requiredField">ОГРН</label>\n        <input class="form-control" id="inputOGRN" placeholder="ОГРН" aria-describedby="OGRNHelpBlock" name="INN">\n        <small id="OGRNHelpBlock" class="form-text text-muted">\n            Обязательное поле ввода!\n        </small>\n      </div>\n    </div>\n    <div class="form-group">\n      <label for="legalAddressCompany" class="requiredField">Юридический адрес</label>\n      <textarea class="form-control" id="inputLegalAddress" placeholder="Юридический адрес" aria-describedby="legalAddressHelpBlock" name="legalAddress" rows="2"></textarea>\n      <small id="legalAdressHelpBlock" class="form-text text-muted">\n          Обязательное поле ввода!\n      </small>\n    </div>\n    <div class="form-group">\n      <label for="factAddressCompany" class="requiredField">Фактический адрес</label>\n      <textarea class="form-control" id="inputFactAddress" placeholder="Фактический адрес" aria-describedby="factAddressHelpBlock" name="factAddress" rows="2"></textarea>\n      <small id="factAdressHelpBlock" class="form-text text-muted">\n          Обязательное поле ввода!\n      </small>\n    </div>\n    </div>\n    </div>',m='<div>\n  <div class="form-group">\n    <label for="inputKorScore" class="requiredField">Корреспондентский счёт</label>\n    <input class="form-control" id="inputKorScore" placeholder="Корреспондентский счёт" aria-describedby="korScoreHelpBlock" name="KPP">\n    <small id="korScoreHelpBlock" class="form-text text-muted">\n        Обязательное поле ввода!\n    </small>\n  </div>\n  <div class="form-row">\n    <div class="form-group col-6">\n      <label for="inputBIK" class="requiredField">БИК</label>\n      <input class="form-control" id="inputBIK" placeholder="БИК" aria-describedby="BIKHelpBlock" name="BIK">\n      <small id="BIKHelpBlock" class="form-text text-muted">\n          Обязательное поле ввода!\n      </small>\n    </div>\n    <div class="form-group col-6">\n      <label for="inputPayScore" class="requiredField">Расчётный счёт</label>\n      <input class="form-control" id="inputPayScore" placeholder="Расчётный счёт" aria-describedby="payScoreHelpBlock" name="payScore">\n      <small id="payScoreHelpBlock" class="form-text text-muted">\n          Обязательное поле ввода!\n      </small>\n    </div>\n  </div>\n  <div class="form-group">\n    <label for="inputBankName" class="requiredField">Наименование банка</label>\n    <input class="form-control" id="inputBankName" placeholder="Наименование банка" aria-describedby="bankNameHelpBlock" name="KPP">\n    <small id="bankNameHelpBlock" class="form-text text-muted">\n        Обязательное поле ввода!\n    </small>\n  </div>\n  <div class="form-row">\n    <div class="col-12">\n      <label class="requiredField">ФИО генерального директора</label>\n    </div>\n    <div class="form-group col-4">\n      <input class="form-control" id="inputDSurname" placeholder="Фамилия" aria-describedby="dSurnameHelpBlock" name="dSurname">\n      <small id="dSurnameHelpBlock" class="form-text text-muted">\n          Обязательное поле ввода!\n      </small>\n    </div>\n    <div class="form-group col-4">\n      <input class="form-control" id="inputdName" placeholder="Имя" aria-describedby="dNameHelpBlock" name="dName">\n      <small id="dNameHelpBlock" class="form-text text-muted">\n          Обязательное поле ввода!\n      </small>\n    </div>\n    <div class="form-group col-4">\n      <input class="form-control" id="inputDPatronymic" placeholder="Отчество" aria-describedby="dPatronymicHelpBlock" name="dPatronymic">\n      <small id="dPatronymicHelpBlock" class="form-text text-muted">\n          Обязательное поле ввода!\n      </small>\n    </div>\n  </div>\n  </div>\n',p='\n  <div>\n    <div class="form-row">\n      <div class="form-group col-6">\n        <label for="inputNameCompany" class="requiredField">Наименование организации</label>\n        <input class="form-control" id="inputNameCompany" placeholder="Наименование организации" aria-describedby="nameCompanyHelpBlock" name="nameCompany">\n        <small id="nameCompanyHelpBlock" class="form-text text-muted">\n            Обязательное поле ввода!\n        </small>\n      </div>\n      <div class="form-group col-6">\n        <label for="inputINN" class="requiredField">ИНН</label>\n        <input class="form-control" id="inputINN" placeholder="ИНН" aria-describedby="INNHelpBlock" name="INN">\n        <small id="INNHelpBlock" class="form-text text-muted">\n            Обязательное поле ввода!\n        </small>\n      </div>\n    </div>\n    <div>\n      <h5>Подбор ковров</h5>\n    </div>\n    <div id="selectedCarpets">\n    <button class="btn" id="addCarpet" style="font-size: 150%;"><i class="fa fa-plus-square" style="color: green;"></i>  Добавить ковёр</button>\n    </div>\n  </div>\n',f='<div class="form-row">\n<div class="form-group col-6">\n  <label for="selectCarpetSize">Размер ковра</label>\n  <select id="selectCarpetSize" class="form-control">\n    <option selected>60 &#215; 85</option>\n    <option>85 &#215; 150</option>\n    <option>115 &#215; 200</option>\n    <option>150 &#215; 240</option>\n    <option>150 &#215; 300</option>\n    <option>115 &#215; 400</option>\n  </select>\n</div>\n<div class="form-group col-2">\n  <label for="carpetSize">Количество</label>\n  <input class="form-control" id="inputCol" aria-describedby="colHelpBlock" name="col" value="1" onchange="if (!this.value || this.value<1) this.value=1;" type="number">\n</div>\n<div class="form-group col-4">\n<label for="selectPeriod">Период замены</label>\n<select id="selectPeriod" class="form-control">\n  <option selected>3 раза в неделю</option>\n  <option>2 раза в неделю</option>\n  <option>1 раза в неделю</option>\n  <option>1 раз в 2 недели</option>\n</select>\n</div>\n</div>';let b;function v(e,t){document.querySelector("#feedback h3").textContent=t,document.querySelector("#feedback form").insertAdjacentHTML("afterbegin",e)}function y(e){let t=!0;Array.from(document.querySelectorAll(".requiredField + input , .requiredField + textarea")).forEach(e=>{e.value||(t=!1,e.classList.add("needValidation"))});return t||e.preventDefault(),t}function g(e){"ЗАКЛЮЧИТЬ ДОГОВОР НА АРЕНДУ КОВРОВ"==document.querySelector("#feedback h3").textContent&&(document.querySelector("#pageNext").style.display="none"),document.querySelector("#feedback form div").remove(),document.querySelector("#btnGroupInFeedback").style.display="block",e.currentTarget.style.visibility="hidden",document.querySelector("#feedback h3").textContent="Обратная связь",document.querySelector("#submitButton").style.display="none"}var k=function(e){e.preventDefault(),$("#modalProgress").modal("show");let t=document.forms.emailForm,l=t.elements.Name.value,n=t.elements.Phone.value,o=t.elements.Email.value,r=t.elements.Message.value,a=new XMLHttpRequest;a.open("POST","./Email/email.php"),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send(`userName=${l}&userPhone=${n}&userEmail=${o}&userMessage=${r}`),a.onload=()=>{$("#modalProgress").modal("hide"),200==a.status?(document.querySelector("#modalSending .modal-body i").className="fa fa-check-circle",document.querySelector("#modalSending .modal-body i").style.color="green",document.querySelector("#modalSending .modal-body p").textContent="Заявка успешно отправлена",$("#modalSending").modal("show")):(document.querySelector("#modalSending .modal-body i").className="fa fa-times-circle",document.querySelector("#modalSending .modal-body i").style.color="red",document.querySelector("#modalSending .modal-body p").textContent="Ошибка! Заявка не отправлена",$("#modalSending").modal("show"))}};l(0);r(),document.querySelector("#menu ul").addEventListener("click",o),document.querySelector("#menu button").addEventListener("click",()=>{document.querySelector("#feedback").scrollIntoView({block:"center",inline:"center",behavior:"smooth"})}),document.querySelector("#calculator .row .col-7").addEventListener("click",(function(e){let t=e.target.closest(".plusValue"),l=e.target.closest(".minusValue");if(!l&&!t)return;let n=i(e.target).getAttribute("sizeID"),o=document.querySelectorAll(".custom-select"),r=document.querySelectorAll(".calcInput")[n-1],a=c[n].priceList[o[n-1].value],d=c[n];t&&(r.value++,s(a,"plus"),d.col++,(1==r.value||d.col>=1)&&r.previousSibling.children[0].classList.add("minusValue")),l&&(r.value--,s(a,"minus"),d.col--,0!=r.value&&0!=d.col||l.classList.remove("minusValue"))})),document.querySelector("#calculator .row .col-7").addEventListener("change",(function(e){let t=e.target.closest(".custom-select"),l=e.target.closest(".calcInput");if(!t&&!l)return;let n=i(e.target).getAttribute("sizeID");if(t){let e=c[n].col,l=c[n],o=c[n].priceList[t.value];s((o-l.price)*e,"plus"),l.price=o}else if(l){(!l.value||l.value<0)&&(l.value=0);let e=c[n],t=l.value;s(c[n].price*(t-e.col),"plus"),e.col=t,e.col>0?l.previousSibling.children[0].classList.add("minusValue"):0==e.col&&l.previousSibling.children[0].classList.remove("minusValue")}})),document.querySelector("#btnGroupInFeedback").addEventListener("click",e=>{e.target.closest("button")&&(!function(e){let t=e.target.closest("#btnGroupInFeedback button");if(t)switch(e.currentTarget.style.display="none",t.children[0].textContent){case"ЗАКАЗАТЬ ЗВОНОК":b=d,v(b,t.children[0].textContent),document.querySelector("#submitButton").style.display="block";break;case"ПОЛУЧИТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ":b=p,v(b,t.children[0].textContent),document.querySelector("#submitButton").style.display="block",document.querySelector("#addCarpet").addEventListener("click",e=>{e.preventDefault(),document.querySelector("#selectedCarpets").insertAdjacentHTML("beforebegin",f)});break;case"ЗАКЛЮЧИТЬ ДОГОВОР НА АРЕНДУ КОВРОВ":b=u,v(b,t.children[0].textContent),document.querySelector("#pageNext").style.display="block"}}(e),document.querySelector("#feedback h3 + button").style.visibility="visible")}),document.querySelector("#feedback h3 + button").addEventListener("click",g),document.querySelector("#pageNext button").addEventListener("click",e=>{y(e)&&function(e){e.currentTarget.parentNode.style.display="none",b=m,document.querySelector("#feedback form div").remove(),v(b,"ЗАКЛЮЧИТЬ ДОГОВОР НА АРЕНДУ КОВРОВ"),document.querySelector("#submitButton").style.display="block"}(e)}),document.querySelector("#submitButton button").addEventListener("click",e=>{y(e)&&(k(e),g())})}]);