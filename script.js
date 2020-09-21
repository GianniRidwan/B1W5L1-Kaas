alert("U kunt deze vragen alleen met 'ja' of 'nee' beantwoorden.");

const ja = true;
const nee = false;


var cheese = prompt("Is de kaas geel?");

if (cheese == "ja") {
	var holes = prompt("Zitten er gaten in?");
	
	if (holes == "ja") {
		var expensive = prompt("Is de kaas belachelijk duur?");
	
		if (expensive == "ja")
			alert("Emmenthaler");
		else
			alert("Leerdammer");
		}

	else 
		var hard = prompt("Is de kaas hard als steen?");
		
		if (hard == "ja")
			alert("Parmigiano Reggiano");
		else
			alert("Goudse kaas");
}
	
else {
	var fungus = prompt("Heeft de kaas blauwe schimmels?");

	if (fungus == "ja") {
		var crust = prompt("Heeft de kaas een korst?");

		if (crust == "ja")
			alert("Bleu de Rochbaron");
		else
			alert("Fourme d'Ambert");
	}
	else {
		var secondCrust = prompt("Heeft de kaas een korst?");

		if (secondCrust == "ja")
			alert("Camembert");
		else
			alert("Mozzarella");
	}
}
