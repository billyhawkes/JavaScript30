let date, hour, min, second, hourHand, minHand, secHand;

setInterval(function () {
	date = new Date();
	hour = date.getHours();
	min = date.getMinutes();
	second = date.getSeconds();
	hourHand = document.querySelector('.hour-hand');
	minHand = document.querySelector('.min-hand');
	secHand = document.querySelector('.second-hand');

	setHour(hour, hourHand);
	setMin(min, minHand);
	setSecond(second, secHand);
}, 1000);

function setHour(hour, hourHand) {
	hourHand.style.transform = `rotate(${90 + (hour * 30)}deg)`;
}

function setMin(min, minHand) {
	minHand.style.transform = `rotate(${90 + (min * 6)}deg)`;
}

function setSecond(second, secHand) {
	secHand.style.transform = `rotate(${90 + (second * 6)}deg)`;
}

	
