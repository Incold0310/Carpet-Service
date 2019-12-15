let result = 0;
let trProperties = {
  "1": {
    col: 0,
    price: 300 * 2,
    priceList: {
      "1 раз в 2 недели": 300 * 2,
      "1 раз в неделю": 135 * 4,
      "2 раза в неделю": 120 * 4,
      "3 раза в неделю": 120 * 4
    }
  },
  "2": {
    col: 0,
    price: 300 * 2,
    priceList: {
      "1 раз в 2 недели": 300 * 2,
      "1 раз в неделю": 155 * 4,
      "2 раза в неделю": 140 * 4,
      "3 раза в неделю": 120 * 4
    }
  },
  "3": {
    col: 0,
    price: 340 * 2,
    priceList: {
      "1 раз в 2 недели": 340 * 2,
      "1 раз в неделю": 210 * 4,
      "2 раза в неделю": 180 * 4,
      "3 раза в неделю": 165 * 4
    }
  },
  "4": {
    col: 0,
    price: 440 * 2,
    priceList: {
      "1 раз в 2 недели": 440 * 2,
      "1 раз в неделю": 320 * 4,
      "2 раза в неделю": 285 * 4,
      "3 раза в неделю": 260 * 4
    }
  },
  "5": {
    col: 0,
    price: 600 * 2,
    priceList: {
      "1 раз в 2 недели": 600 * 2,
      "1 раз в неделю": 365 * 4,
      "2 раза в неделю": 330 * 4,
      "3 раза в неделю": 290 * 4
    }
  },
  "6": {
    col: 0,
    price: 700 * 2,
    priceList: {
      "1 раз в 2 недели": 700 * 2,
      "1 раз в неделю": 400 * 4,
      "2 раза в неделю": 340 * 4,
      "3 раза в неделю": 300 * 4
    }
  }
};


function changePeriod_manualInput(event) {
  let changePeriod = event.target.closest('.custom-select');
  let manualInput = event.target.closest('.calcInput');
  if (!changePeriod && !manualInput) return;

  let tr = goToTr(event.target).getAttribute('sizeID');

  if (changePeriod) {
    let carpertNumber = trProperties[tr].col;
    let pastPrice = trProperties[tr];
    let newPrice = trProperties[tr].priceList[changePeriod.value];
    calculateResult((newPrice - pastPrice.price) * carpertNumber, "plus");
    pastPrice.price = newPrice;
  } else if (manualInput) {
    let pastNumber = trProperties[tr];
    let newNumber = manualInput.value;
    let carpetPrice = trProperties[tr].price;
    calculateResult(carpetPrice * (newNumber - pastNumber.col), "plus");
    pastNumber.col = newNumber;
    if (pastNumber.col > 0) {
      manualInput.previousSibling.children[0].classList.add('minusValue');
    } else if (pastNumber.col == 0) {
      manualInput.previousSibling.children[0].classList.remove('minusValue');
    }
  }
}

function goToTr(elem) {
  while (elem.tagName != "TR") {
    elem = elem.parentNode;
  }
  return elem;
}

function changeColOfCarpets(event) {
  let changeValuePlusButton = event.target.closest('.plusValue');
  let changeValueMinusButton = event.target.closest('.minusValue');

  if (!changeValueMinusButton && !changeValuePlusButton) return;

  let tr = goToTr(event.target).getAttribute('sizeID');
  let nearSelect = document.querySelectorAll('.custom-select');
  let calcInput = document.querySelectorAll('.calcInput')[tr - 1];
  let carpetPrice = trProperties[tr].priceList[nearSelect[tr - 1].value];
  let pastNumber = trProperties[tr];

  if (changeValuePlusButton) {
    calcInput.value++;
    calculateResult(carpetPrice, "plus");
    pastNumber.col++;
    if (calcInput.value == 1 || pastNumber.col >= 1) {
      calcInput.previousSibling.children[0].classList.add('minusValue');
    }
  }
  if (changeValueMinusButton) {
    calcInput.value--;
    calculateResult(carpetPrice, "minus");
    pastNumber.col--;
    if (calcInput.value == 0 || pastNumber.col == 0) {
      changeValueMinusButton.classList.remove('minusValue');
    }
  }
}

function calculateResult(price, type) {
  switch (type) {
    case "plus":
      result += price;
      break;
    case "minus":
      result -= price
      break;
  }
  document.querySelector('#finishPrice span').textContent = result;
}

export {changeColOfCarpets, changePeriod_manualInput};
