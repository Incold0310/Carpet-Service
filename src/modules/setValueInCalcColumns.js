function setValueInTd() {
  let chooseCol = document.querySelectorAll('.chooseCol');
  let choosePer = document.querySelectorAll('.choosePer');
  for (let i = 0; i < chooseCol.length; i++) {
    choosePer[i].innerHTML = `<select class="custom-select">
	    							<option selected>1 раз в 2 недели</option>
	   								<option>1 раз в неделю</option>
	    							<option>2 раза в неделю</option>
										<option>3 раза в неделю</option>
	   								</select>`;
    chooseCol[i].innerHTML = `<div class="input-group">
	  								<div class="input-group-prepend">
	   									<button class="btn btn-outline-danger" type="button"><i class="fa fa-minus"></i></button>
	  								</div><input class="form-control calcInput" value="0" type="number"><div class="input-group-append">
	    								<button class="btn btn-outline-success plusValue" type="button"><i class="fa fa-plus"></i></button>
	  								</div>
									</div>`;
  }
}

export default setValueInTd;
