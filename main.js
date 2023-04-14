let weight, height, measure, category, bmi, error;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "you must input your data";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = `Your BMI is ${bmi} `;
		category = " which means you are  UNDERWEIGHT";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = `Your BMI is ${bmi} `;
		category = ", which means you are  NORMAL";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = `Your BMI is ${bmi} `; 
		category = ", which means you are  OVERWEIGHT";
	} else if (bmi >= 30) {
		measure = `Your BMI is ${bmi} `;
		category = ", which means you are  OBESITY";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {
		document.getElementById("results").innerHTML = measure + category;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "can't handle with negative number";
	}
}
