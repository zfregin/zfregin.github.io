
 if ( navigator.platform.indexOf('Win') != -1 ) {
  window.document.getElementById("wrapper").setAttribute("class", "windows");
} else if ( navigator.platform.indexOf('Mac') != -1 ) {
  window.document.getElementById("wrapper").setAttribute("class", "mac");
}
// Activates Order Receipt Modal
$(document).ready(function(){
	$("#orderBtn").click(function(){
		getReceipt();
		$("#orderModal").modal();
	});
});
// Main function that gets pizza order
function getReceipt() {
	var totalArray = [];
	var sizeTotal = 0;
	var sizeArray = document.getElementsByName("size")
	// Iterates through sizes and stores the selected size
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
		}
	}
	// Sets the base pizza price based on selected size
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	totalArray.push(sizeTotal, selectedSize);
	getCrust(totalArray);
	getCheese(totalArray);
	getSauce(totalArray);
	getMeat(totalArray);
	getVeggies(totalArray);
	// Populates the selection and price in receipt modal
	document.getElementById("pizza-size").innerHTML = selectedSize;
	document.getElementById("size-price").innerHTML = "$"+sizeTotal+".00";
	document.getElementById("order-total").innerHTML = "$"+totalArray[0]+".00";
}


// Finds crust selection and price
function getCrust(totalArray) {
	var crustTotal = 0;
	var crustArray = document.getElementsByName("crust");
	// Iterates through sizes and stores the selected crust
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
		}
	}
	// Sets price of selected crust
	totalArray.push(selectedCrust);
	if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else {
		crustTotal = 0;
	}
	// Adds crust cost to total cost in order array
	totalArray[0] = (totalArray[0] + crustTotal);
	// Populates the crust selection and cost in receipt modal
	document.getElementById("selected-crust").innerHTML = selectedCrust;
	document.getElementById("crust-price").innerHTML = "$"+crustTotal+".00";
}
// Finds cheese selection and price
function getCheese(totalArray) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByName("cheese");
	// Iterates through cheese options and stores the selection
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			var selectedCheese = cheeseArray[i].value;
		}
	}
	// Sets price of cheese selection
	totalArray.push(selectedCheese);
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else {
		cheeseTotal = 0;
	}
	// Adds cheese cost to total cost in order array
	totalArray[0] = (totalArray[0] + cheeseTotal);
	// Populates the cheese selection and cost in receipt modal
	document.getElementById("selected-cheese").innerHTML = selectedCheese;
	document.getElementById("cheese-price").innerHTML = "$"+cheeseTotal+".00";
}
// Finds sauce selection and price
function getSauce(totalArray) {
	var sauceArray = document.getElementsByName("sauce");
	// Iterates through the sauces and stores the selected sauce
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
		}
	}
	// Adds sauce selection to order array
	totalArray.push(selectedSauce);
	// Populates sauce selection in receipt modal
	document.getElementById("selected-sauce").innerHTML = selectedSauce;
	document.getElementById("sauce-price").innerHTML = "$0.00";
}
// Finds meat selection and price
function getMeat(totalArray) {
	var meatTotal = 0;
	var selectedMeats = [];
	var meatArray = document.getElementsByName("meat");
	// Iterates through the meats and stores the selected meats
	for (var i = 0; i < meatArray.length; i++) {
		if (meatArray[i].checked) {
			selectedMeats.push(meatArray[i].value);
		}
	}
	// Adds meat selections to order array
	totalArray.push(selectedMeats);
	var meatCount = selectedMeats.length;
	// Checks if more than one meat selected and adds cost for additional meats
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
		// Adds spaces to selected meats for receipt text
		for (var i = 1; i < selectedMeats.length; i++) {
			selectedMeats[i] = " "+selectedMeats[i];
		}
	} else {
		meatTotal = 0;
	}
	// Adds meat cost to total cost in order array
	totalArray[0] = (totalArray[0] + meatTotal);
	// Populates the meat selection and cost in receipt modal
	document.getElementById("selected-meat").innerHTML = selectedMeats;
	document.getElementById("meat-price").innerHTML = "$"+meatTotal+".00";
}
// Finds veggie selection and price
function getVeggies(totalArray) {
	var veggieTotal = 0;
	var selectedVeggies = [];
	var veggieArray = document.getElementsByName("veggies");
	// Iterates through the veggies and stores the selected veggies
	for (var i = 0; i < veggieArray.length; i++) {
		if (veggieArray[i].checked) {
			selectedVeggies.push(veggieArray[i].value);
			console.log("selected veggie item: ("+veggieArray[i].value+")");
		}
	}
	// Adds veggies selections to order array
	totalArray.push(selectedVeggies);
	var veggieCount = selectedVeggies.length;
	// Checks if more than one meat selected and adds cost for additional meats
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
		// Adds spaces to selected veggies for receipt text
		for (var i = 1; i < selectedVeggies.length; i++) {
			selectedVeggies[i] = " "+selectedVeggies[i];
		}
	} else {
		veggieTotal = 0;
	}
	// Adds veggie cost to total cost in order array
	totalArray[0] = (totalArray[0] + veggieTotal);
	// Populates the veggie selection and cost in receipt modal
	document.getElementById("selected-veggies").innerHTML = selectedVeggies;
	document.getElementById("veggies-price").innerHTML = "$"+veggieTotal+".00";
}