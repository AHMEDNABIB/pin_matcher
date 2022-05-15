function getPin(params) {
	const pin = Math.round(Math.random() * 10000);
	//   55+ '' = '55'
	const pinString = pin + "";
	if (pinString.length === 4) {
		return pin;
	} else {
		return getPin();
	}
}

function generatePin(params) {
	const pin = getPin();
	document.getElementById("pin-input").value = pin;
}

// CalInputculator

document.getElementById("key-pad").addEventListener("click", function (e) {
	const number = e.target.innerText;
	const calInput = document.getElementById("typed-numbers");
	if (isNaN(number)) {
		calInput.value = "";
	} else {
		const previousNumber = calInput.value;
		const newNumber = previousNumber + number;

		calInput.value = newNumber;
	}
});

document
	.getElementById("submit-btn")
	.addEventListener("click", function (params) {
		const pin = document.getElementById("pin-input").value;
		const typeNumbers = document.getElementById("typed-numbers").value;

		if (pin === typeNumbers) {
			const notifySuccess = document.getElementById("notify-success");

			notifySuccess.style.display = "block";
		} else {
			const failError = document.getElementById("notify-fail");

			failError.style.display = "block";
		}
	});
