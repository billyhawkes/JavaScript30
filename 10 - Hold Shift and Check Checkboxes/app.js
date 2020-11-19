const checkBoxes = document.querySelectorAll('input[type="checkbox"');

let lastChecked;

checkBoxes.forEach(box => box.addEventListener('click', function (e) {	
	if (e.shiftKey && box.checked) {
		let fill = false;
		for (let bx of checkBoxes) {
			if (bx == lastChecked || bx == this) fill = !fill;
			if (fill) bx.checked = true;
		}
		fill = false;
	}
	lastChecked = this;
}));
