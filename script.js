alert("U kunt deze vragen alleen met 'ja' of 'nee' beantwoorden.");

const ja = true;
const nee = false;


var cheese = prompt("Is de kaas geel?");

if (cheese.toLowerCase() == "ja") {
	var holes = prompt("Zitten er gaten in?");
	
	if (holes.toLowerCase() == "ja") {
		var expensive = prompt("Is de kaas belachelijk duur?");
	
		if (expensive.toLowerCase() == "ja")
			alert("Emmenthaler");
		else
			alert("Leerdammer");
		}

	else 
		var hard = prompt("Is de kaas hard als steen?");
		
		if (hard.toLowerCase() == "ja")
			alert("Parmigiano Reggiano");
		else
			alert("Goudse kaas");
}
	
else {
	var fungus = prompt("Heeft de kaas blauwe schimmels?");

	if (fungus.toLowerCase() == "ja") {
		var crust = prompt("Heeft de kaas een korst?");

		if (crust.toLowerCase() == "ja")
			alert("Bleu de Rochbaron");
		else
			alert("Fourme d'Ambert");
	}
	else {
		var secondCrust = prompt("Heeft de kaas een korst?");

		if (secondCrust.toLowerCase() == "ja")
			alert("Camembert");
		else
			alert("Mozzarella");
	}
}
