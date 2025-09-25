'use strict'
let form1 = document.getElementById("form1")
let txt1 = form1.querySelector("input[type=text]")
let lst1 = form1.querySelector("select")
let chk1 = form1.querySelectorAll("input[type=checkbox]")

// richiamato dall'html
function visualizza(index) {
	let msg = "";
	let items;
	switch (index) {
		case 1:
			alert(txt1.value)
			break;
		case 2:
			alert(lst1.value)
			break;
		case 3:
			for(let i = 0; i < chk1.length;i++)
			{
				alert(chk1[i].value)
			}

	}
	alert(msg);
}


function imposta(index) {
	let items
	switch (index) {

	}
}

