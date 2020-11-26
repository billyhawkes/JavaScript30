const pressed = [];
const keycode = 'billy';



window.addEventListener('keyup', (e) => {
	pressed.push(e.key);
	pressed.splice(- keycode.length - 1, pressed.length - keycode.length);

	if (pressed.join('') === keycode) {
		console.log('Match');
	}
});
